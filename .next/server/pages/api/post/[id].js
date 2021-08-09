module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/post/[id].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n  } // global.prisma = new PrismaClient();\n\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJpc21hLnRzP2Q3MjgiXSwibmFtZXMiOlsicHJpc21hIiwiZ2xvYmFsIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBLElBQUlBLE1BQUo7O0FBRUEsV0FBMkMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxVQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsMkRBQUosRUFBaEI7QUFDRCxHQUhJLENBSUw7OztBQUNBRixRQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBaEI7QUFDRDs7QUFFY0EscUVBQWYiLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hLCBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBuYW1lc3BhY2UgTm9kZUpTIHtcbiAgICBpbnRlcmZhY2UgR2xvYmFsIHtcbiAgICAgIHByaXNtYTogUHJpc21hQ2xpZW50O1xuICAgIH1cbiAgfVxufVxuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICAvLyBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/post/[id].ts":
/*!********************************!*\
  !*** ./pages/api/post/[id].ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handle; });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n // DELETE /api/post/:id\n// PUT /api/post/:id\n\nasync function handle(req, res) {\n  const postId = req.query.id;\n\n  if (req.method === \"DELETE\") {\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.delete({\n      where: {\n        id: Number(postId)\n      }\n    });\n    res.json(post);\n  } else if (req.method === \"PUT\") {\n    const {\n      title,\n      content\n    } = req.body;\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.update({\n      where: {\n        id: Number(postId)\n      },\n      data: {\n        title: title,\n        content: content,\n        updatedAt: new Date()\n      }\n    });\n    res.json(post);\n  } else {\n    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9zdC8udHM/NGE4NSJdLCJuYW1lcyI6WyJoYW5kbGUiLCJyZXEiLCJyZXMiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwicG9zdCIsInByaXNtYSIsImRlbGV0ZSIsIndoZXJlIiwiTnVtYmVyIiwianNvbiIsInRpdGxlIiwiY29udGVudCIsImJvZHkiLCJ1cGRhdGUiLCJkYXRhIiwidXBkYXRlZEF0IiwiRGF0ZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Q0FFQTtBQUNBOztBQUNlLGVBQWVBLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3QyxRQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSixDQUFVQyxFQUF6Qjs7QUFDQSxNQUFJSixHQUFHLENBQUNLLE1BQUosS0FBZSxRQUFuQixFQUE2QjtBQUMzQixVQUFNQyxJQUFJLEdBQUcsTUFBTUMsbURBQU0sQ0FBQ0QsSUFBUCxDQUFZRSxNQUFaLENBQW1CO0FBQ3BDQyxXQUFLLEVBQUU7QUFBRUwsVUFBRSxFQUFFTSxNQUFNLENBQUNSLE1BQUQ7QUFBWjtBQUQ2QixLQUFuQixDQUFuQjtBQUdBRCxPQUFHLENBQUNVLElBQUosQ0FBU0wsSUFBVDtBQUNELEdBTEQsTUFLTyxJQUFJTixHQUFHLENBQUNLLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUMvQixVQUFNO0FBQUVPLFdBQUY7QUFBU0M7QUFBVCxRQUFxQmIsR0FBRyxDQUFDYyxJQUEvQjtBQUNBLFVBQU1SLElBQUksR0FBRyxNQUFNQyxtREFBTSxDQUFDRCxJQUFQLENBQVlTLE1BQVosQ0FBbUI7QUFDcENOLFdBQUssRUFBRTtBQUFFTCxVQUFFLEVBQUVNLE1BQU0sQ0FBQ1IsTUFBRDtBQUFaLE9BRDZCO0FBRXBDYyxVQUFJLEVBQUU7QUFBRUosYUFBSyxFQUFFQSxLQUFUO0FBQWdCQyxlQUFPLEVBQUVBLE9BQXpCO0FBQWtDSSxpQkFBUyxFQUFFLElBQUlDLElBQUo7QUFBN0M7QUFGOEIsS0FBbkIsQ0FBbkI7QUFJQWpCLE9BQUcsQ0FBQ1UsSUFBSixDQUFTTCxJQUFUO0FBQ0QsR0FQTSxNQU9BO0FBQ0wsVUFBTSxJQUFJYSxLQUFKLENBQ0gsWUFBV25CLEdBQUcsQ0FBQ0ssTUFBTyx5Q0FEbkIsQ0FBTjtBQUdEO0FBQ0YiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuXG4vLyBERUxFVEUgL2FwaS9wb3N0LzppZFxuLy8gUFVUIC9hcGkvcG9zdC86aWRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICBjb25zdCBwb3N0SWQgPSByZXEucXVlcnkuaWQ7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogTnVtYmVyKHBvc3RJZCkgfSxcbiAgICB9KTtcbiAgICByZXMuanNvbihwb3N0KTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogTnVtYmVyKHBvc3RJZCkgfSxcbiAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlLCBjb250ZW50OiBjb250ZW50LCB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkgfSxcbiAgICB9KTtcbiAgICByZXMuanNvbihwb3N0KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVGhlIEhUVFAgJHtyZXEubWV0aG9kfSBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGlzIHJvdXRlLmBcbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/post/[id].ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ })

/******/ });