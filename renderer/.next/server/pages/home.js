"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./pages/home.jsx":
/*!************************!*\
  !*** ./pages/home.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ \"react-loader-spinner\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction Home() {\n    dotenv__WEBPACK_IMPORTED_MODULE_5___default().config({\n        path: \".env\"\n    });\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const runPythonScript = ()=>{\n        setLoading(true);\n        (0,child_process__WEBPACK_IMPORTED_MODULE_3__.exec)(\"python3 scripts/python_environments.py && python3 scripts/node_environment.py\", (err, stdout, stderr)=>{\n            if (err) {\n                console.error(err);\n            } else {\n                setTimeout(()=>{\n                    setLoading(false);\n                    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/view\");\n                }, 3000);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-5xl font-bold p-10\",\n                    children: \"Software Inventory\"\n                }, void 0, false, {\n                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-500 p-3 rounded-md\",\n                    onClick: ()=>runPythonScript(),\n                    children: \"Get Started\"\n                }, void 0, false, {\n                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__.TailSpin, {\n                        height: \"40\",\n                        width: \"40\",\n                        color: \"lightBlue\",\n                        ariaLabel: \"tail-spin-loading\",\n                        radius: \"1\",\n                        wrapperStyle: {},\n                        wrapperClass: \"\",\n                        visible: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNBO0FBQ0k7QUFDVztBQUNwQjtBQUNKO0FBRVQsU0FBU00sSUFBSSxHQUFHO0lBQzdCRixvREFBYSxDQUFDO1FBQUVDLElBQUksRUFBRSxNQUFNO0tBQUUsQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sS0FBQ0csT0FBTyxNQUFFQyxVQUFVLE1BQUlULCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQzdDLE1BQU1VLGVBQWUsR0FBRyxJQUFNO1FBQzVCRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakJQLG1EQUFJLENBQ0YsK0VBQStFLEVBQy9FLENBQUNTLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEdBQUs7WUFDdkIsSUFBSUYsR0FBRyxFQUFFO2dCQUNQRyxPQUFPLENBQUNDLEtBQUssQ0FBQ0osR0FBRyxDQUFDLENBQUM7WUFDckIsT0FBTztnQkFDTEssVUFBVSxDQUFDLElBQU07b0JBQ2ZQLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEJSLHVEQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNYLENBQUM7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxxQkFDRSw4REFBQ2lCLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJDQUEyQztrQkFDeEQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDJDQUEyQzs7OEJBQ3hELDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMseUJBQXlCOzhCQUFDLG9CQUFrQjs7Ozs7d0JBQUs7OEJBQy9ELDhEQUFDRSxRQUFNO29CQUNMRixTQUFTLEVBQUMsNEJBQTRCO29CQUN0Q0csT0FBTyxFQUFFLElBQU1aLGVBQWUsRUFBRTs4QkFDakMsYUFFRDs7Ozs7d0JBQVM7OEJBQ1QsOERBQUNRLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxLQUFLOzhCQUNsQiw0RUFBQ2hCLDBEQUFRO3dCQUNQb0IsTUFBTSxFQUFDLElBQUk7d0JBQ1hDLEtBQUssRUFBQyxJQUFJO3dCQUNWQyxLQUFLLEVBQUMsV0FBVzt3QkFDakJDLFNBQVMsRUFBQyxtQkFBbUI7d0JBQzdCQyxNQUFNLEVBQUMsR0FBRzt3QkFDVkMsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCQyxZQUFZLEVBQUMsRUFBRTt3QkFDZkMsT0FBTyxFQUFFdEIsT0FBTzs7Ozs7NEJBQ2hCOzs7Ozt3QkFDRTs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS5qc3g/OGEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGV4ZWMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgVGFpbFNwaW4gfSBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgZG90ZW52LmNvbmZpZyh7IHBhdGg6IFwiLmVudlwiIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJ1blB5dGhvblNjcmlwdCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGV4ZWMoXG4gICAgICBcInB5dGhvbjMgc2NyaXB0cy9weXRob25fZW52aXJvbm1lbnRzLnB5ICYmIHB5dGhvbjMgc2NyaXB0cy9ub2RlX2Vudmlyb25tZW50LnB5XCIsXG4gICAgICAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aWV3XCIpO1xuICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBwLTEwXCI+U29mdHdhcmUgSW52ZW50b3J5PC9oMT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMyByb3VuZGVkLW1kXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBydW5QeXRob25TY3JpcHQoKX1cbiAgICAgICAgPlxuICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICAgIDxUYWlsU3BpblxuICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXG4gICAgICAgICAgICBhcmlhTGFiZWw9XCJ0YWlsLXNwaW4tbG9hZGluZ1wiXG4gICAgICAgICAgICByYWRpdXM9XCIxXCJcbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M9XCJcIlxuICAgICAgICAgICAgdmlzaWJsZT17bG9hZGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUm91dGVyIiwiZXhlYyIsIlRhaWxTcGluIiwiZG90ZW52IiwicGF0aCIsIkhvbWUiLCJjb25maWciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJ1blB5dGhvblNjcmlwdCIsImVyciIsInN0ZG91dCIsInN0ZGVyciIsImNvbnNvbGUiLCJlcnJvciIsInNldFRpbWVvdXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsImFyaWFMYWJlbCIsInJhZGl1cyIsIndyYXBwZXJTdHlsZSIsIndyYXBwZXJDbGFzcyIsInZpc2libGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.jsx\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home.jsx"));
module.exports = __webpack_exports__;

})();