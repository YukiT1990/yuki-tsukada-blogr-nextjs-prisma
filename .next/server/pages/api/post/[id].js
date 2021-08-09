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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  // if (!global.prisma) {\n  //   global.prisma = new PrismaClient();\n  // }\n  global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJpc21hLnRzP2Q3MjgiXSwibmFtZXMiOlsicHJpc21hIiwiZ2xvYmFsIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBLElBQUlBLE1BQUo7O0FBRUEsV0FBMkMsRUFBM0MsTUFFTztBQUNMO0FBQ0E7QUFDQTtBQUNBQyxRQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsMkRBQUosRUFBaEI7QUFDQUYsUUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBRWNBLHFFQUFmIiwiZmlsZSI6Ii4vbGliL3ByaXNtYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBOb2RlSlMge1xuICAgIGludGVyZmFjZSBHbG9iYWwge1xuICAgICAgcHJpc21hOiBhbnk7XG4gICAgfVxuICB9XG59XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICAvLyBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgLy8gICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAvLyB9XG4gIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/post/[id].ts":
/*!********************************!*\
  !*** ./pages/api/post/[id].ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handle; });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n // DELETE /api/post/:id\n// PUT /api/post/:id\n\nasync function handle(req, res) {\n  const postId = req.query.id;\n\n  if (req.method === \"DELETE\") {\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.delete({\n      where: {\n        id: Number(postId)\n      }\n    });\n    res.json(post);\n  } else if (req.method === \"PUT\") {\n    const {\n      title,\n      content\n    } = req.body;\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.update({\n      where: {\n        id: Number(postId)\n      },\n      data: {\n        title: title,\n        content: content\n      }\n    });\n    res.json(post);\n  } else {\n    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9zdC8udHM/NGE4NSJdLCJuYW1lcyI6WyJoYW5kbGUiLCJyZXEiLCJyZXMiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwicG9zdCIsInByaXNtYSIsImRlbGV0ZSIsIndoZXJlIiwiTnVtYmVyIiwianNvbiIsInRpdGxlIiwiY29udGVudCIsImJvZHkiLCJ1cGRhdGUiLCJkYXRhIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtDQUVBO0FBQ0E7O0FBQ2UsZUFBZUEsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdDLFFBQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLEVBQXpCOztBQUNBLE1BQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLFVBQU1DLElBQUksR0FBRyxNQUFNQyxtREFBTSxDQUFDRCxJQUFQLENBQVlFLE1BQVosQ0FBbUI7QUFDcENDLFdBQUssRUFBRTtBQUFFTCxVQUFFLEVBQUVNLE1BQU0sQ0FBQ1IsTUFBRDtBQUFaO0FBRDZCLEtBQW5CLENBQW5CO0FBR0FELE9BQUcsQ0FBQ1UsSUFBSixDQUFTTCxJQUFUO0FBQ0QsR0FMRCxNQUtPLElBQUlOLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQy9CLFVBQU07QUFBRU8sV0FBRjtBQUFTQztBQUFULFFBQXFCYixHQUFHLENBQUNjLElBQS9CO0FBQ0EsVUFBTVIsSUFBSSxHQUFHLE1BQU1DLG1EQUFNLENBQUNELElBQVAsQ0FBWVMsTUFBWixDQUFtQjtBQUNwQ04sV0FBSyxFQUFFO0FBQUVMLFVBQUUsRUFBRU0sTUFBTSxDQUFDUixNQUFEO0FBQVosT0FENkI7QUFFcENjLFVBQUksRUFBRTtBQUFFSixhQUFLLEVBQUVBLEtBQVQ7QUFBZ0JDLGVBQU8sRUFBRUE7QUFBekI7QUFGOEIsS0FBbkIsQ0FBbkI7QUFJQVosT0FBRyxDQUFDVSxJQUFKLENBQVNMLElBQVQ7QUFDRCxHQVBNLE1BT0E7QUFDTCxVQUFNLElBQUlXLEtBQUosQ0FDSCxZQUFXakIsR0FBRyxDQUFDSyxNQUFPLHlDQURuQixDQUFOO0FBR0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wb3N0L1tpZF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbi8vIERFTEVURSAvYXBpL3Bvc3QvOmlkXG4vLyBQVVQgL2FwaS9wb3N0LzppZFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHBvc3RJZCA9IHJlcS5xdWVyeS5pZDtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxuICAgIH0pO1xuICAgIHJlcy5qc29uKHBvc3QpO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUFVUXCIpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBjb250ZW50IH0gPSByZXEuYm9keTtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxuICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGUsIGNvbnRlbnQ6IGNvbnRlbnQgfSxcbiAgICB9KTtcbiAgICByZXMuanNvbihwb3N0KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVGhlIEhUVFAgJHtyZXEubWV0aG9kfSBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGlzIHJvdXRlLmBcbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/post/[id].ts\n");

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