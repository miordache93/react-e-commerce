/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ./components/Header/Header */ \"./src/client/components/Header/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n    var route = _ref.route;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        (0, _reactRouterConfig.renderRoutes)(route.routes)\n    );\n};\n\nexports.default = {\n    component: App\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/App.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage/HomePage */ \"./src/client/pages/HomePage/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _NotFoundPage = __webpack_require__(/*! ./pages/NotFoundPage/NotFoundPage */ \"./src/client/pages/NotFoundPage/NotFoundPage.js\");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nvar _ProductsPage = __webpack_require__(/*! ./pages/ProductsPage/ProductsPage */ \"./src/client/pages/ProductsPage/ProductsPage.js\");\n\nvar _ProductsPage2 = _interopRequireDefault(_ProductsPage);\n\nvar _LoginPage = __webpack_require__(/*! ./pages/LoginPage/LoginPage */ \"./src/client/pages/LoginPage/LoginPage.js\");\n\nvar _LoginPage2 = _interopRequireDefault(_LoginPage);\n\nvar _ProductDetailsPage = __webpack_require__(/*! ./pages/ProductDetailsPage/ProductDetailsPage */ \"./src/client/pages/ProductDetailsPage/ProductDetailsPage.js\");\n\nvar _ProductDetailsPage2 = _interopRequireDefault(_ProductDetailsPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n    routes: [_extends({}, _HomePage2.default, {\n        path: '/',\n        exact: true\n    }), _extends({}, _ProductsPage2.default, {\n        path: '/products'\n    }), _extends({}, _ProductDetailsPage2.default, {\n        path: '/product/:id',\n        exact: true\n    }), _extends({}, _LoginPage2.default, {\n        path: '/login'\n    }), _extends({}, _NotFoundPage2.default)]\n})];\n\n//# sourceURL=webpack://react-ssr/./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.filterProducts = exports.fetchProductById = exports.fetchProducts = exports.fetchCurrentUser = exports.createUser = exports.FILTER_PRODUCTS = exports.ADD_PROD_TO_CART = exports.FETCH_PRODUCTS = exports.FETCH_PRODUCT_BY_ID = exports.FETCH_CURRENT_USER = undefined;\n\nvar _urlParser = __webpack_require__(/*! ./../../helpers/urlParser */ \"./src/helpers/urlParser.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar path = \"/.netlify/functions\";\n\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';\nvar FETCH_PRODUCT_BY_ID = exports.FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';\nvar FETCH_PRODUCTS = exports.FETCH_PRODUCTS = 'FETCH_PRODUCTS';\nvar ADD_PROD_TO_CART = exports.ADD_PROD_TO_CART = 'ADD_PROD_TO_CART';\nvar FILTER_PRODUCTS = exports.FILTER_PRODUCTS = 'FILTER_PRODUCTS';\n\nvar createUser = exports.createUser = function createUser(data) {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.post(path + '/users-create', {\n                                body: {\n                                    username: data.username || 'mihai',\n                                    password: data.password || 'test123'\n                                }\n                            }, function (err) {\n                                console.log(err);\n                            });\n\n                        case 2:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser(username) {\n    return function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            api.defaults.headers.common['Authorization'] = 'Basic bWloYWk6dGVzdDEyMw==';\n\n                            _context2.next = 3;\n                            return api.get(path + '/users-get/' + username);\n\n                        case 3:\n                            res = _context2.sent;\n\n\n                            if (res) {\n                                window.localStorage.setItem('authenticated', true);\n                            }\n\n                            dispatch({\n                                type: FETCH_CURRENT_USER,\n                                payload: res\n                            });\n\n                        case 6:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, undefined);\n        }));\n\n        return function (_x4, _x5, _x6) {\n            return _ref2.apply(this, arguments);\n        };\n    }();\n};\n\nvar fetchProducts = exports.fetchProducts = function fetchProducts(queryParams) {\n    return function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n            var products_url, URL, res;\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            products_url = path + '/products';\n                            URL = products_url + '?' + (0, _urlParser.urlParser)(queryParams);\n                            _context3.next = 4;\n                            return api.get(encodeURI(URL).slice(0, -1));\n\n                        case 4:\n                            res = _context3.sent;\n\n\n                            if (res.data.products) {\n                                dispatch({\n                                    type: FETCH_PRODUCTS,\n                                    payload: { data: res.data.products }\n                                });\n                            } else {\n                                dispatch({\n                                    type: FETCH_PRODUCTS,\n                                    payload: { data: [] }\n                                });\n                            }\n\n                        case 6:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, undefined);\n        }));\n\n        return function (_x7, _x8, _x9) {\n            return _ref3.apply(this, arguments);\n        };\n    }();\n};\n\nvar fetchProductById = exports.fetchProductById = function fetchProductById(id) {\n    return function () {\n        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee4$(_context4) {\n                while (1) {\n                    switch (_context4.prev = _context4.next) {\n                        case 0:\n                            _context4.next = 2;\n                            return api.get(path + '/products/' + id);\n\n                        case 2:\n                            res = _context4.sent;\n\n                            console.log('ID \\n', id);\n                            dispatch({\n                                type: FETCH_PRODUCT_BY_ID,\n                                payload: { data: res.data }\n                            });\n\n                        case 5:\n                        case 'end':\n                            return _context4.stop();\n                    }\n                }\n            }, _callee4, undefined);\n        }));\n\n        return function (_x10, _x11, _x12) {\n            return _ref4.apply(this, arguments);\n        };\n    }();\n};\n\nvar filterProducts = exports.filterProducts = function filterProducts(filter) {\n    return function () {\n        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {\n            return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                while (1) {\n                    switch (_context5.prev = _context5.next) {\n                        case 0:\n                            dispatch({\n                                type: FILTER_PRODUCTS,\n                                payload: { data: filter }\n                            });\n\n                        case 1:\n                        case 'end':\n                            return _context5.stop();\n                    }\n                }\n            }, _callee5, undefined);\n        }));\n\n        return function (_x13, _x14, _x15) {\n            return _ref5.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/Header/Header.js":
/*!************************************************!*\
  !*** ./src/client/components/Header/Header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(_ref) {\n    var auth = _ref.auth,\n        cartItems = _ref.cartItems;\n\n    var authButton = auth ? _react2.default.createElement(\n        'a',\n        { href: '/api/logout' },\n        'Logout'\n    ) : _react2.default.createElement(\n        'a',\n        { href: '/login' },\n        'Login'\n    );\n    return _react2.default.createElement(\n        'nav',\n        null,\n        _react2.default.createElement(\n            'div',\n            { className: 'nav-wrapper' },\n            _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/', className: 'brand-logo' },\n                'React SSR'\n            ),\n            _react2.default.createElement(\n                'ul',\n                { className: 'right' },\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/cart' },\n                        'Cart'\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/products' },\n                        'Products'\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    authButton\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    'Cart products: ',\n                    cartItems.length\n                )\n            )\n        )\n    );\n};\nfunction mapStateToProps(_ref2) {\n    var auth = _ref2.auth,\n        cartItems = _ref2.cartItems;\n\n    return { auth: auth, cartItems: cartItems };\n}\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack://react-ssr/./src/client/components/Header/Header.js?");

/***/ }),

/***/ "./src/client/components/ProductCard/ProductCard.js":
/*!**********************************************************!*\
  !*** ./src/client/components/ProductCard/ProductCard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _index = __webpack_require__(/*! ../../actions/index */ \"./src/client/actions/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar productCartStyles = {\n    border: '1px solid black',\n    padding: '5px',\n    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',\n    margin: '10px 15px',\n    display: 'flex',\n    flexDirection: 'column',\n    width: '20%'\n};\n\nvar producCardActionsStyles = {\n    display: 'flex',\n    flexDirection: 'column',\n    width: '50%',\n    margin: 'auto',\n    padding: '5px'\n};\n\nvar ProductCard = function ProductCard(props) {\n\n    var addToCart = function addToCart(ev, prod) {\n        var cartItems = JSON.parse(window.localStorage.getItem('cartItems')) || [];\n        if (!cartItems.find(function (product) {\n            return prod.id === product.id;\n        })) {\n            cartItems.push(prod);\n            props.addProdToCart(prod);\n        } else {\n            alert('Product already in cart');\n        }\n\n        window.localStorage.setItem('cartItems', JSON.stringify(cartItems));\n    };\n\n    return _react2.default.createElement(\n        'div',\n        { styles: productCartStyles },\n        _react2.default.createElement(\n            'h6',\n            null,\n            props.product.name\n        ),\n        _react2.default.createElement(\n            'div',\n            { styles: producCardActionsStyles },\n            _react2.default.createElement(\n                'button',\n                { onClick: function onClick(ev) {\n                        return addToCart(ev, props.product);\n                    } },\n                'Add to cart'\n            ),\n            _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/product/' + props.product.id },\n                'View product '\n            )\n        )\n    );\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        addProdToCart: function addProdToCart(product) {\n            dispatch({\n                type: _index.ADD_PROD_TO_CART,\n                payload: {\n                    data: product\n                }\n            });\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ProductCard);\n\n//# sourceURL=webpack://react-ssr/./src/client/components/ProductCard/ProductCard.js?");

/***/ }),

/***/ "./src/client/components/ProductsFilter/ProductsFilter.js":
/*!****************************************************************!*\
  !*** ./src/client/components/ProductsFilter/ProductsFilter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactSelect = __webpack_require__(/*! react-select */ \"react-select\");\n\nvar _reactSelect2 = _interopRequireDefault(_reactSelect);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar options = [{ value: 'usd', label: 'USD ' }, { value: 'eur', label: 'EUR' }, { value: 'ron', label: 'RON' }];\n\nfunction ProductsFilter() {\n    var _useState = (0, _react.useState)(null),\n        _useState2 = _slicedToArray(_useState, 2),\n        selectedOption = _useState2[0],\n        setSelectedOption = _useState2[1];\n\n    var handleChange = function handleChange(selectedOption) {\n        // setSelectedOption({ selectedOption });\n        console.log(selectedOption);\n    };\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'p',\n            null,\n            'Filters'\n        ),\n        _react2.default.createElement(_reactSelect2.default, {\n            value: selectedOption,\n            onChange: handleChange,\n            options: options\n        })\n    );\n}\n\nexports.default = ProductsFilter;\n\n//# sourceURL=webpack://react-ssr/./src/client/components/ProductsFilter/ProductsFilter.js?");

/***/ }),

/***/ "./src/client/components/hocs/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/client/components/hocs/requireAuth.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (ChildComponent) {\n    var RequireAuth = function (_Component) {\n        _inherits(RequireAuth, _Component);\n\n        function RequireAuth() {\n            _classCallCheck(this, RequireAuth);\n\n            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));\n        }\n\n        _createClass(RequireAuth, [{\n            key: 'render',\n            value: function render() {\n                switch (this.props.auth) {\n                    case false:\n                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });\n                    case null:\n                        return _react2.default.createElement(\n                            'div',\n                            null,\n                            'Loading...'\n                        );\n                    default:\n                        return _react2.default.createElement(ChildComponent, this.props);\n                }\n            }\n        }]);\n\n        return RequireAuth;\n    }(_react.Component);\n\n    function mapStateToProps(_ref) {\n        var auth = _ref.auth;\n\n        return { auth: auth };\n    }\n\n    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/components/hocs/requireAuth.js?");

/***/ }),

/***/ "./src/client/pages/HomePage/HomePage.js":
/*!***********************************************!*\
  !*** ./src/client/pages/HomePage/HomePage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n    return _react2.default.createElement(\n        'div',\n        { className: 'center-align', style: { martingTop: '20px' } },\n        _react2.default.createElement(\n            'h3',\n            null,\n            'Welcome '\n        ),\n        _react2.default.createElement(\n            'p',\n            null,\n            'Check out these awesome features'\n        )\n    );\n};\n\nexports.default = {\n    component: Home\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/HomePage/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/LoginPage/LoginPage.js":
/*!*************************************************!*\
  !*** ./src/client/pages/LoginPage/LoginPage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _actions = __webpack_require__(/*! ../../actions */ \"./src/client/actions/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LoginPage = function LoginPage(props) {\n    var performAuth = function performAuth() {\n        props.fetchCurrentUser('mihai');\n    };\n\n    var loginContent = props.auth ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }) : _react2.default.createElement(\n        'button',\n        { onClick: function onClick() {\n                return performAuth();\n            } },\n        'Please login'\n    );\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        loginContent\n    );\n};\n\nfunction mapStateToProps(state) {\n    return {\n        auth: state.auth\n    };\n};\n\nfunction mapDispatchToProps(dispatch) {\n    return (0, _redux.bindActionCreators)({\n        fetchCurrentUser: _actions.fetchCurrentUser\n    }, dispatch);\n}\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginPage)\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/LoginPage/LoginPage.js?");

/***/ }),

/***/ "./src/client/pages/NotFoundPage/NotFoundPage.js":
/*!*******************************************************!*\
  !*** ./src/client/pages/NotFoundPage/NotFoundPage.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n    var _ref$staticContext = _ref.staticContext,\n        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n    staticContext.notFound = true;\n    return _react2.default.createElement(\n        'h1',\n        null,\n        'Route not found.'\n    );\n};\n\nexports.default = {\n    component: NotFoundPage\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/NotFoundPage/NotFoundPage.js?");

/***/ }),

/***/ "./src/client/pages/ProductDetailsPage/ProductDetailsPage.js":
/*!*******************************************************************!*\
  !*** ./src/client/pages/ProductDetailsPage/ProductDetailsPage.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _actions = __webpack_require__(/*! ../../actions */ \"./src/client/actions/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductDetailsPage = function (_Component) {\n    _inherits(ProductDetailsPage, _Component);\n\n    function ProductDetailsPage() {\n        _classCallCheck(this, ProductDetailsPage);\n\n        return _possibleConstructorReturn(this, (ProductDetailsPage.__proto__ || Object.getPrototypeOf(ProductDetailsPage)).apply(this, arguments));\n    }\n\n    _createClass(ProductDetailsPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var id = this.props.match.params.id;\n            this.props.fetchProductById(id);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var product = this.props.product;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'center-align', style: { marginTop: '20px' } },\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'Product details page '\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this2.props.history.push('/products');\n                        } },\n                    'Go back'\n                ),\n                product ? _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        product.name\n                    ),\n                    _react2.default.createElement(\n                        'p',\n                        null,\n                        product.description\n                    )\n                ) : _react2.default.createElement(\n                    'div',\n                    null,\n                    'Loading...'\n                )\n            );\n        }\n    }]);\n\n    return ProductDetailsPage;\n}(_react.Component);\n\n;\n\nfunction mapStateToProps(state) {\n    return {\n        product: state.selectedProduct\n    };\n};\n\nfunction loadData(store) {\n    return store.dispatch((0, _actions.fetchProductById)());\n}\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, { fetchProductById: _actions.fetchProductById })((0, _reactRouter.withRouter)(ProductDetailsPage)),\n    loadData: loadData\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/ProductDetailsPage/ProductDetailsPage.js?");

/***/ }),

/***/ "./src/client/pages/ProductsPage/ProductsPage.js":
/*!*******************************************************!*\
  !*** ./src/client/pages/ProductsPage/ProductsPage.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _actions = __webpack_require__(/*! ../../actions */ \"./src/client/actions/index.js\");\n\nvar _requireAuth = __webpack_require__(/*! ../../components/hocs/requireAuth */ \"./src/client/components/hocs/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nvar _ProductCard = __webpack_require__(/*! ../../components/ProductCard/ProductCard */ \"./src/client/components/ProductCard/ProductCard.js\");\n\nvar _ProductCard2 = _interopRequireDefault(_ProductCard);\n\nvar _ProductsFilter = __webpack_require__(/*! ../../components/ProductsFilter/ProductsFilter */ \"./src/client/components/ProductsFilter/ProductsFilter.js\");\n\nvar _ProductsFilter2 = _interopRequireDefault(_ProductsFilter);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _urlParser = __webpack_require__(/*! ./../../../helpers/urlParser */ \"./src/helpers/urlParser.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductsPage = function (_Component) {\n    _inherits(ProductsPage, _Component);\n\n    function ProductsPage() {\n        _classCallCheck(this, ProductsPage);\n\n        return _possibleConstructorReturn(this, (ProductsPage.__proto__ || Object.getPrototypeOf(ProductsPage)).apply(this, arguments));\n    }\n\n    _createClass(ProductsPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.filterProducts(this.setQueryParams());\n            // this.props.fetchProducts(this.setQueryParams());\n        }\n    }, {\n        key: 'componentDidUpdate',\n        value: function componentDidUpdate(prevProps) {\n            if (this.props.filters !== prevProps.filters) {\n                this.props.fetchProducts(this.setQueryParams());\n            }\n        }\n    }, {\n        key: 'setQueryParams',\n        value: function setQueryParams() {\n            var location = this.props.location;\n\n            var params = new URLSearchParams(location.search);\n            var queryParams = {\n                search: params.get('search'),\n                count: params.get('count'),\n                page: params.get('page')\n            };\n\n            return queryParams;\n        }\n    }, {\n        key: 'updateCountFilter',\n        value: function updateCountFilter() {\n            var filters = {\n                count: 10,\n                search: 'macbook',\n                page: 1\n            };\n\n            var searchQuery = (0, _urlParser.urlParser)(filters).slice(0, -1);\n            console.log('Search query: ', searchQuery);\n\n            this.props.history.push({\n                pathname: '/products',\n                search: '?' + searchQuery\n            });\n            this.props.filterProducts(filters);\n        }\n    }, {\n        key: 'updatePageFilter',\n        value: function updatePageFilter() {\n            var filters = {\n                count: 10,\n                search: 'macbook',\n                page: 3\n            };\n\n            var searchQuery = (0, _urlParser.urlParser)(filters).slice(0, -1);\n            console.log('Search query: ', searchQuery);\n\n            this.props.history.push({\n                pathname: '/products',\n                search: '?' + searchQuery\n            });\n            this.props.filterProducts(filters);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            if (this.props.products.length > 0) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(_ProductsFilter2.default, null),\n                        _react2.default.createElement(\n                            'h2',\n                            null,\n                            JSON.stringify(this.props.filters)\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                'button',\n                                { onClick: function onClick() {\n                                        return _this2.updateCountFilter();\n                                    } },\n                                'Count 10'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'li',\n                            null,\n                            _react2.default.createElement(\n                                'button',\n                                { onClick: function onClick() {\n                                        return _this2.updatePageFilter();\n                                    } },\n                                'Page 3'\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        this.props.products.map(function (prod) {\n                            return _react2.default.createElement(_ProductCard2.default, { key: prod.id, product: prod });\n                        })\n                    )\n                );\n            } else {\n                return _react2.default.createElement(\n                    'p',\n                    null,\n                    'Loading...'\n                );\n            }\n        }\n    }]);\n\n    return ProductsPage;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n    return {\n        products: state.products,\n        filters: state.filters\n    };\n};\n\nfunction mapDispatchToProps(dispatch) {\n    return (0, _redux.bindActionCreators)({\n        fetchProducts: _actions.fetchProducts,\n        filterProducts: function filterProducts(filters) {\n            return dispatch({\n                type: _actions.FILTER_PRODUCTS,\n                payload: {\n                    data: _extends({}, filters)\n                }\n            });\n        }\n    }, dispatch);\n}\n\nfunction loadData(store) {\n    return store.dispatch((0, _actions.fetchProducts)());\n}\n\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _requireAuth2.default)((0, _reactRouter.withRouter)(ProductsPage))),\n    loadData: loadData\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/ProductsPage/ProductsPage.js?");

/***/ }),

/***/ "./src/client/reducers/authReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/authReducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_CURRENT_USER:\n      return action.payload.data || false;\n    default:\n      return state;\n  }\n};\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/authReducer.js?");

/***/ }),

/***/ "./src/client/reducers/cartReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/cartReducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.ADD_PROD_TO_CART:\n            return [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(state), [action.payload.data]))));\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/cartReducer.js?");

/***/ }),

/***/ "./src/client/reducers/filtersReducer.js":
/*!***********************************************!*\
  !*** ./src/client/reducers/filtersReducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nvar initialState = {\n    search: '',\n    count: null,\n    page: null\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.FILTER_PRODUCTS:\n            return _extends({}, state, action.payload.data);\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/filtersReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _authReducer = __webpack_require__(/*! ./authReducer */ \"./src/client/reducers/authReducer.js\");\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nvar _productsReducer = __webpack_require__(/*! ./productsReducer */ \"./src/client/reducers/productsReducer.js\");\n\nvar _productsReducer2 = _interopRequireDefault(_productsReducer);\n\nvar _selectedProductReducer = __webpack_require__(/*! ./selectedProductReducer */ \"./src/client/reducers/selectedProductReducer.js\");\n\nvar _selectedProductReducer2 = _interopRequireDefault(_selectedProductReducer);\n\nvar _cartReducer = __webpack_require__(/*! ./cartReducer */ \"./src/client/reducers/cartReducer.js\");\n\nvar _cartReducer2 = _interopRequireDefault(_cartReducer);\n\nvar _filtersReducer = __webpack_require__(/*! ./filtersReducer */ \"./src/client/reducers/filtersReducer.js\");\n\nvar _filtersReducer2 = _interopRequireDefault(_filtersReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    auth: _authReducer2.default,\n    products: _productsReducer2.default,\n    selectedProduct: _selectedProductReducer2.default,\n    cartItems: _cartReducer2.default,\n    filters: _filtersReducer2.default\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/productsReducer.js":
/*!************************************************!*\
  !*** ./src/client/reducers/productsReducer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.FETCH_PRODUCTS:\n            return action.payload.data;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/productsReducer.js?");

/***/ }),

/***/ "./src/client/reducers/selectedProductReducer.js":
/*!*******************************************************!*\
  !*** ./src/client/reducers/selectedProductReducer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.FETCH_PRODUCT_BY_ID:\n            return action.payload.data;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/selectedProductReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n    var axiosInstance = _axios2.default.create({\n        baseURL: 'https://wekode-test.netlify.app/.netlify/functions/server',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    });\n\n    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\n    return store;\n};\n\n//# sourceURL=webpack://react-ssr/./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: context },\n            _react2.default.createElement(\n                'div',\n                null,\n                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n            )\n        )\n    ));\n\n    return '\\n        <html>\\n        <head>\\n            <base href=\"/\" />\\n            <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\\n            <title>React Redux Express - SSR</title>\\n        </head>\\n        <body>\\n            <div id=\"root\">' + content + '</div>\\n            <script>\\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\\n            </script>\\n            <script src=\"bundle.js\"></script>\\n        </body>\\n        </html>\\n    ';\n};\n\n//# sourceURL=webpack://react-ssr/./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/helpers/urlParser.js":
/*!**********************************!*\
  !*** ./src/helpers/urlParser.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nvar urlParser = exports.urlParser = function urlParser(queryParams) {\n    var _path = '';\n    if (queryParams.search || queryParams.count || queryParams.page) {\n        for (var prop in queryParams) {\n            var i = 0;\n            if (queryParams[prop]) {\n                if (i > 0 && i <= Object.keys(queryParams).length) {\n                    _path = _path + '&';\n                }\n                i++;\n                _path = _path + (prop + '=' + queryParams[prop] + '&');\n            }\n        }\n    }\n\n    console.log('PATH', _path);\n    return _path;\n};\n\n//# sourceURL=webpack://react-ssr/./src/helpers/urlParser.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

eval("module.exports = require(\"axios\");;\n\n//# sourceURL=webpack://react-ssr/external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = require(\"babel-polyfill\");;\n\n//# sourceURL=webpack://react-ssr/external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://react-ssr/external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = require(\"express-http-proxy\");;\n\n//# sourceURL=webpack://react-ssr/external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

eval("module.exports = require(\"react\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = require(\"react-dom/server\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = require(\"react-redux\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = require(\"react-router\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = require(\"react-router-config\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = require(\"react-router-dom\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-router-dom%22?");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = require(\"react-select\");;\n\n//# sourceURL=webpack://react-ssr/external_%22react-select%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

eval("module.exports = require(\"redux\");;\n\n//# sourceURL=webpack://react-ssr/external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = require(\"redux-thunk\");;\n\n//# sourceURL=webpack://react-ssr/external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = require(\"serialize-javascript\");;\n\n//# sourceURL=webpack://react-ssr/external_%22serialize-javascript%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use('/api', (0, _expressHttpProxy2.default)('https://wekode-test.netlify.app'));\n\napp.use(_express2.default.static('public'));\napp.get('*', function (req, res) {\n  var store = (0, _createStore2.default)(req);\n\n  _Routes2.default.forEach(function (r) {\n    r.queryParams = req.query;\n  });\n\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).filter(function (_ref) {\n    var route = _ref.route;\n    return (0, _reactRouter.matchPath)(req.url, route);\n  }).map(function (_ref2) {\n    var route = _ref2.route;\n\n    console.log(req.query);\n    route.queryParams = req.query;\n    return route.loadData ? route.loadData(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0, _renderer2.default)(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n\n    if (context.notFound) {\n      res.status(404);\n    }\n\n    res.send(content);\n  });\n});\n\napp.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack://react-ssr/./src/index.js?");
})();

/******/ })()
;