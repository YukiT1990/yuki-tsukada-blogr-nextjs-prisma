webpackHotUpdate_N_E("pages/p/[id]",{

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/yuki.t/Desktop/NextJSPractice/blogr-nextjs-prisma/pages/p/[id].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\nfunction publishPost(_x) {\n  return _publishPost.apply(this, arguments);\n}\n\nfunction _publishPost() {\n  _publishPost = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"/api/publish/\".concat(id), {\n              method: \"PUT\"\n            });\n\n          case 2:\n            _context.next = 4;\n            return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(\"/\");\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _publishPost.apply(this, arguments);\n}\n\nfunction deletePost(_x2) {\n  return _deletePost.apply(this, arguments);\n}\n\nfunction _deletePost() {\n  _deletePost = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(\"/api/post/\".concat(id), {\n              method: \"DELETE\"\n            });\n\n          case 2:\n            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(\"/\");\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _deletePost.apply(this, arguments);\n}\n\nfunction editPost(_x3) {\n  return _editPost.apply(this, arguments);\n}\n\nfunction _editPost() {\n  _editPost = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(\"/edit/\".concat(id));\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _editPost.apply(this, arguments);\n}\n\nvar Post = function Post(props) {\n  _s();\n\n  var _session$user, _props$author, _props$author2;\n\n  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_8__[\"useSession\"])(),\n      _useSession2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  if (loading) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 12\n      }\n    }, \"Authenticating ...\");\n  }\n\n  var userHasValidSession = Boolean(session);\n  var postBelongsToUser = (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email) === ((_props$author = props.author) === null || _props$author === void 0 ? void 0 : _props$author.email);\n  var title = props.title;\n\n  if (!props.published) {\n    title = \"\".concat(title, \" (Draft)\");\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"p\", {\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"By \", (props === null || props === void 0 ? void 0 : (_props$author2 = props.author) === null || _props$author2 === void 0 ? void 0 : _props$author2.name) || \"Unknown author\"), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    source: props.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }), __jsx(\"small\", {\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"Created at: \", props.createdAt.substring(0, 10), \" \", props.createdAt.substring(11, 19), \" \"), __jsx(\"br\", {\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }), __jsx(\"small\", {\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, \"Updated at: \", props.updatedAt.substring(0, 10), \" \", props.updatedAt.substring(11, 19)), __jsx(\"br\", {\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }), !props.published && userHasValidSession && postBelongsToUser && __jsx(\"button\", {\n    onClick: function onClick() {\n      return publishPost(props.id);\n    },\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, \"Publish\"), userHasValidSession && postBelongsToUser && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(\"button\", {\n    onClick: function onClick() {\n      return editPost(props.id);\n    },\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"Edit\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return deletePost(props.id);\n    },\n    className: \"jsx-1758098127\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Delete\"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    id: \"1758098127\",\n    __self: _this\n  }, \".page.jsx-1758098127{background:rgba(0,255,0,0.05);padding:2rem;}.actions.jsx-1758098127{margin-top:2rem;}button.jsx-1758098127{background:#00e600;border:1px solid black;border-radius:0.125rem;padding:1rem 2rem;}button.jsx-1758098127+button.jsx-1758098127{margin-left:1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dWtpLnQvRGVza3RvcC9OZXh0SlNQcmFjdGljZS9ibG9nci1uZXh0anMtcHJpc21hL3BhZ2VzL3AvW2lkXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZrQixBQUc0QyxBQUtqQixBQUlHLEFBUUYsZ0JBWG5CLENBWUEsRUFQeUIsV0FWVixZQVdVLENBVnpCLHNCQVdvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3l1a2kudC9EZXNrdG9wL05leHRKU1ByYWN0aWNlL2Jsb2dyLW5leHRqcy1wcmlzbWEvcGFnZXMvcC9baWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUG9zdFByb3BzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3RSID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBOdW1iZXIocGFyYW1zPy5pZCkgfHwgLTEsXG4gICAgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBwb3N0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwb3N0UikpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBwb3N0LFxuICB9O1xufTtcblxuYXN5bmMgZnVuY3Rpb24gcHVibGlzaFBvc3QoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBmZXRjaChgL2FwaS9wdWJsaXNoLyR7aWR9YCwge1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgfSk7XG4gIGF3YWl0IFJvdXRlci5wdXNoKFwiL1wiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGAvYXBpL3Bvc3QvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICB9KTtcbiAgUm91dGVyLnB1c2goXCIvXCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBlZGl0UG9zdChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIFJvdXRlci5wdXNoKGAvZWRpdC8ke2lkfWApO1xufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQb3N0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5BdXRoZW50aWNhdGluZyAuLi48L2Rpdj47XG4gIH1cbiAgY29uc3QgdXNlckhhc1ZhbGlkU2Vzc2lvbiA9IEJvb2xlYW4oc2Vzc2lvbik7XG4gIGNvbnN0IHBvc3RCZWxvbmdzVG9Vc2VyID0gc2Vzc2lvbj8udXNlcj8uZW1haWwgPT09IHByb3BzLmF1dGhvcj8uZW1haWw7XG4gIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlO1xuICBpZiAoIXByb3BzLnB1Ymxpc2hlZCkge1xuICAgIHRpdGxlID0gYCR7dGl0bGV9IChEcmFmdClgO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD5CeSB7cHJvcHM/LmF1dGhvcj8ubmFtZSB8fCBcIlVua25vd24gYXV0aG9yXCJ9PC9wPlxuICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Byb3BzLmNvbnRlbnR9IC8+XG4gICAgICAgIDxzbWFsbD5cbiAgICAgICAgICBDcmVhdGVkIGF0OiB7cHJvcHMuY3JlYXRlZEF0LnN1YnN0cmluZygwLCAxMCl9e1wiIFwifVxuICAgICAgICAgIHtwcm9wcy5jcmVhdGVkQXQuc3Vic3RyaW5nKDExLCAxOSl9e1wiIFwifVxuICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHNtYWxsPlxuICAgICAgICAgIFVwZGF0ZWQgYXQ6IHtwcm9wcy51cGRhdGVkQXQuc3Vic3RyaW5nKDAsIDEwKX17XCIgXCJ9XG4gICAgICAgICAge3Byb3BzLnVwZGF0ZWRBdC5zdWJzdHJpbmcoMTEsIDE5KX1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHshcHJvcHMucHVibGlzaGVkICYmIHVzZXJIYXNWYWxpZFNlc3Npb24gJiYgcG9zdEJlbG9uZ3NUb1VzZXIgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHVibGlzaFBvc3QocHJvcHMuaWQpfT5QdWJsaXNoPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHt1c2VySGFzVmFsaWRTZXNzaW9uICYmIHBvc3RCZWxvbmdzVG9Vc2VyICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0UG9zdChwcm9wcy5pZCl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdChwcm9wcy5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4wNSk7XG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBlNjAwO1xuICAgICAgICAgIC8qIGJvcmRlcjogMDsgKi9cbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24gKyBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl19 */\\n/*@ sourceURL=/Users/yuki.t/Desktop/NextJSPractice/blogr-nextjs-prisma/pages/p/[id].tsx */\"));\n};\n\n_s(Post, \"btnbnkOsPYI0mLfZro/2DT47AuA=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_8__[\"useSession\"]];\n});\n\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcC8udHN4P2Q2ZmQiXSwibmFtZXMiOlsicHVibGlzaFBvc3QiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiUm91dGVyIiwicHVzaCIsImRlbGV0ZVBvc3QiLCJlZGl0UG9zdCIsIlBvc3QiLCJwcm9wcyIsInVzZVNlc3Npb24iLCJzZXNzaW9uIiwibG9hZGluZyIsInVzZXJIYXNWYWxpZFNlc3Npb24iLCJCb29sZWFuIiwicG9zdEJlbG9uZ3NUb1VzZXIiLCJ1c2VyIiwiZW1haWwiLCJhdXRob3IiLCJ0aXRsZSIsInB1Ymxpc2hlZCIsIm5hbWUiLCJjb250ZW50IiwiY3JlYXRlZEF0Iiwic3Vic3RyaW5nIiwidXBkYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztTQXFCZUEsVzs7Ozs7a01BQWYsaUJBQTJCQyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUUMsS0FBSyx3QkFBaUJELEVBQWpCLEdBQXVCO0FBQ2hDRSxvQkFBTSxFQUFFO0FBRHdCLGFBQXZCLENBRGI7O0FBQUE7QUFBQTtBQUFBLG1CQUlRQyxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUpSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FPZUMsVTs7Ozs7aU1BQWYsa0JBQTBCTCxFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUUMsS0FBSyxxQkFBY0QsRUFBZCxHQUFvQjtBQUM3QkUsb0JBQU0sRUFBRTtBQURxQixhQUFwQixDQURiOztBQUFBO0FBSUVDLDhEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FPZUUsUTs7Ozs7K0xBQWYsa0JBQXdCTixFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VH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QU8sRUFBRTtBQUFBLGFBQU1LLFVBQVUsQ0FBQ0csS0FBSyxDQUFDUixFQUFQLENBQWhCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsQ0FsQkosQ0FERjtBQUFBO0FBQUE7QUFBQSw0dUpBREY7QUFrREQsQ0E5REQ7O0dBQU1PLEk7VUFDdUJFLDJEOzs7S0FEdkJGLEk7O0FBZ0VTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3AvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBvc3RQcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwb3N0UiA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogTnVtYmVyKHBhcmFtcz8uaWQpIHx8IC0xLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlLCBlbWFpbDogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcG9zdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zdFIpKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogcG9zdCxcbiAgfTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hQb3N0KGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgZmV0Y2goYC9hcGkvcHVibGlzaC8ke2lkfWAsIHtcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gIH0pO1xuICBhd2FpdCBSb3V0ZXIucHVzaChcIi9cIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBvc3QoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBmZXRjaChgL2FwaS9wb3N0LyR7aWR9YCwge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgfSk7XG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZWRpdFBvc3QoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBSb3V0ZXIucHVzaChgL2VkaXQvJHtpZH1gKTtcbn1cblxuY29uc3QgUG9zdDogUmVhY3QuRkM8UG9zdFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+QXV0aGVudGljYXRpbmcgLi4uPC9kaXY+O1xuICB9XG4gIGNvbnN0IHVzZXJIYXNWYWxpZFNlc3Npb24gPSBCb29sZWFuKHNlc3Npb24pO1xuICBjb25zdCBwb3N0QmVsb25nc1RvVXNlciA9IHNlc3Npb24/LnVzZXI/LmVtYWlsID09PSBwcm9wcy5hdXRob3I/LmVtYWlsO1xuICBsZXQgdGl0bGUgPSBwcm9wcy50aXRsZTtcbiAgaWYgKCFwcm9wcy5wdWJsaXNoZWQpIHtcbiAgICB0aXRsZSA9IGAke3RpdGxlfSAoRHJhZnQpYDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPHA+Qnkge3Byb3BzPy5hdXRob3I/Lm5hbWUgfHwgXCJVbmtub3duIGF1dGhvclwifTwvcD5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwcm9wcy5jb250ZW50fSAvPlxuICAgICAgICA8c21hbGw+XG4gICAgICAgICAgQ3JlYXRlZCBhdDoge3Byb3BzLmNyZWF0ZWRBdC5zdWJzdHJpbmcoMCwgMTApfXtcIiBcIn1cbiAgICAgICAgICB7cHJvcHMuY3JlYXRlZEF0LnN1YnN0cmluZygxMSwgMTkpfXtcIiBcIn1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzbWFsbD5cbiAgICAgICAgICBVcGRhdGVkIGF0OiB7cHJvcHMudXBkYXRlZEF0LnN1YnN0cmluZygwLCAxMCl9e1wiIFwifVxuICAgICAgICAgIHtwcm9wcy51cGRhdGVkQXQuc3Vic3RyaW5nKDExLCAxOSl9XG4gICAgICAgIDwvc21hbGw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7IXByb3BzLnB1Ymxpc2hlZCAmJiB1c2VySGFzVmFsaWRTZXNzaW9uICYmIHBvc3RCZWxvbmdzVG9Vc2VyICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHB1Ymxpc2hQb3N0KHByb3BzLmlkKX0+UHVibGlzaDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7dXNlckhhc1ZhbGlkU2Vzc2lvbiAmJiBwb3N0QmVsb25nc1RvVXNlciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdFBvc3QocHJvcHMuaWQpfT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QocHJvcHMuaWQpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMDUpO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwZTYwMDtcbiAgICAgICAgICAvKiBib3JkZXI6IDA7ICovXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/p/[id].tsx\n");

/***/ })

})