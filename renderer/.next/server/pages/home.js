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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ \"react-loader-spinner\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home() {\n    dotenv__WEBPACK_IMPORTED_MODULE_4___default().config({\n        path: \".env\"\n    });\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = (url)=>{\n            setLoading(true);\n            const requestOptions = {\n                method: \"GET\",\n                redirect: \"follow\"\n            };\n            fetch(url, requestOptions).then((response)=>response.json()).then((data)=>{\n                console.log(data);\n                setLoading(false);\n            }).catch((error)=>{\n                console.log(\"error\", error);\n                setLoading(false);\n            });\n        };\n        const getPythonData = ()=>{\n            const pythonUrl = `${process.env.BACKEND_URL}/python-environments`;\n            fetchData(pythonUrl);\n        };\n        const getJsData = ()=>{\n            const jsUrl = `${process.env.BACKEND_URL}/node-environments`;\n            fetchData(jsUrl);\n        };\n        getPythonData();\n        getJsData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-5xl font-bold p-10\",\n                    children: \"Software Inventory\"\n                }, void 0, false, {\n                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-500 p-3 rounded-md\",\n                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/view\"),\n                    children: \"Get Started\"\n                }, void 0, false, {\n                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.TailSpin, {\n                        height: \"40\",\n                        width: \"40\",\n                        color: \"lightBlue\",\n                        ariaLabel: \"tail-spin-loading\",\n                        radius: \"1\",\n                        wrapperStyle: {},\n                        wrapperClass: \"\",\n                        visible: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/home.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ1g7QUFDZTtBQUNwQjtBQUViLFNBQVNLLElBQUksR0FBRztJQUM3QkQsb0RBQWEsQ0FBQztRQUFFRyxJQUFJLEVBQUUsTUFBTTtLQUFFLENBQUMsQ0FBQztJQUNoQyxNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJVCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUU3Q0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTVMsU0FBUyxHQUFHLENBQUNDLEdBQUcsR0FBSztZQUN6QkYsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpCLE1BQU1HLGNBQWMsR0FBRztnQkFDckJDLE1BQU0sRUFBRSxLQUFLO2dCQUNiQyxRQUFRLEVBQUUsUUFBUTthQUNuQjtZQUVEQyxLQUFLLENBQUNKLEdBQUcsRUFBRUMsY0FBYyxDQUFDLENBQ3ZCSSxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDRyxDQUFBQSxJQUFJLEdBQUk7Z0JBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztnQkFDbEJWLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FDRGEsS0FBSyxDQUFDQyxDQUFBQSxLQUFLLEdBQUk7Z0JBQ2RILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRUUsS0FBSyxDQUFDLENBQUM7Z0JBQzVCZCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsTUFBTWUsYUFBYSxHQUFHLElBQU07WUFDMUIsTUFBTUMsU0FBUyxHQUFHLENBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztZQUNsRWxCLFNBQVMsQ0FBQ2UsU0FBUyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUVELE1BQU1JLFNBQVMsR0FBRyxJQUFNO1lBQ3RCLE1BQU1DLEtBQUssR0FBRyxDQUFDLEVBQUVKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7WUFDNURsQixTQUFTLENBQUNvQixLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBRUROLGFBQWEsRUFBRSxDQUFDO1FBQ2hCSyxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQywyQ0FBMkM7a0JBQ3hELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQywyQ0FBMkM7OzhCQUN4RCw4REFBQ0MsSUFBRTtvQkFBQ0QsU0FBUyxFQUFDLHlCQUF5Qjs4QkFBQyxvQkFBa0I7Ozs7O3dCQUFLOzhCQUMvRCw4REFBQ0UsUUFBTTtvQkFDTEYsU0FBUyxFQUFDLDRCQUE0QjtvQkFDdENHLE9BQU8sRUFBRSxJQUFNakMsdURBQVcsQ0FBQyxPQUFPLENBQUM7OEJBQ3BDLGFBRUQ7Ozs7O3dCQUFTOzhCQUNULDhEQUFDNkIsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLEtBQUs7OEJBQ2xCLDRFQUFDN0IsMERBQVE7d0JBQ1BrQyxNQUFNLEVBQUMsSUFBSTt3QkFDWEMsS0FBSyxFQUFDLElBQUk7d0JBQ1ZDLEtBQUssRUFBQyxXQUFXO3dCQUNqQkMsU0FBUyxFQUFDLG1CQUFtQjt3QkFDN0JDLE1BQU0sRUFBQyxHQUFHO3dCQUNWQyxZQUFZLEVBQUUsRUFBRTt3QkFDaEJDLFlBQVksRUFBQyxFQUFFO3dCQUNmQyxPQUFPLEVBQUVwQyxPQUFPOzs7Ozs0QkFDaEI7Ozs7O3dCQUNFOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzeD84YTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBUYWlsU3BpbiB9IGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGRvdGVudi5jb25maWcoeyBwYXRoOiBcIi5lbnZcIiB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKHVybCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgXG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgICB9O1xuICBcbiAgICAgIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICBcbiAgICBjb25zdCBnZXRQeXRob25EYXRhID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHl0aG9uVXJsID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L3B5dGhvbi1lbnZpcm9ubWVudHNgO1xuICAgICAgZmV0Y2hEYXRhKHB5dGhvblVybCk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgZ2V0SnNEYXRhID0gKCkgPT4ge1xuICAgICAgY29uc3QganNVcmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vbm9kZS1lbnZpcm9ubWVudHNgO1xuICAgICAgZmV0Y2hEYXRhKGpzVXJsKTtcbiAgICB9O1xuICBcbiAgICBnZXRQeXRob25EYXRhKCk7XG4gICAgZ2V0SnNEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBwLTEwXCI+U29mdHdhcmUgSW52ZW50b3J5PC9oMT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHAtMyByb3VuZGVkLW1kXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi92aWV3XCIpfVxuICAgICAgICA+XG4gICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XG4gICAgICAgICAgPFRhaWxTcGluXG4gICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHRCbHVlXCJcbiAgICAgICAgICAgIGFyaWFMYWJlbD1cInRhaWwtc3Bpbi1sb2FkaW5nXCJcbiAgICAgICAgICAgIHJhZGl1cz1cIjFcIlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlPXt7fX1cbiAgICAgICAgICAgIHdyYXBwZXJDbGFzcz1cIlwiXG4gICAgICAgICAgICB2aXNpYmxlPXtsb2FkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJUYWlsU3BpbiIsImRvdGVudiIsIkhvbWUiLCJjb25maWciLCJwYXRoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaERhdGEiLCJ1cmwiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsInJlZGlyZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZ2V0UHl0aG9uRGF0YSIsInB5dGhvblVybCIsInByb2Nlc3MiLCJlbnYiLCJCQUNLRU5EX1VSTCIsImdldEpzRGF0YSIsImpzVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJhcmlhTGFiZWwiLCJyYWRpdXMiLCJ3cmFwcGVyU3R5bGUiLCJ3cmFwcGVyQ2xhc3MiLCJ2aXNpYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.jsx\n");

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