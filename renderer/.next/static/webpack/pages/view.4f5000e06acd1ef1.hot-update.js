"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
global["webpackHotUpdate_N_E"]("pages/view",{

/***/ "./pages/view.jsx":
/*!************************!*\
  !*** ./pages/view.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DependencyTable)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"../node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ \"../node_modules/react-loader-spinner/dist/esm/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"process\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction DependencyTable() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), searchTerm = ref[0], setSearchTerm = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = [\n        {}\n    ], allDependencies = ref2[0], setAllDependencies = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function(url) {\n            setLoading(true);\n            var requestOptions = {\n                method: \"GET\",\n                redirect: \"follow\"\n            };\n            fetch(url, requestOptions).then(function(response) {\n                return response.json();\n            }).then(function(data) {\n                setAllDependencies.apply(void 0, (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(allDependencies).concat([\n                    data\n                ]));\n                // console.log(data);\n                setLoading(false);\n            }).catch(function(error) {\n                console.log(\"error\", error);\n                setLoading(false);\n            });\n        };\n        var getPythonData = function() {\n            var pythonUrl = \"\".concat(process.env.BACKEND_URL, \"/python-environments\");\n            fetchData(pythonUrl);\n        };\n        var getJsData = function() {\n            var jsUrl = \"\".concat(process.env.BACKEND_URL, \"/node-environments\");\n            fetchData(jsUrl);\n        };\n        getPythonData();\n        getJsData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"List of Dependencies\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 p-3 rounded-md\",\n                            onClick: function() {\n                                return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/home\");\n                            },\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.TailSpin, {\n                        height: \"40\",\n                        width: \"40\",\n                        color: \"lightBlue\",\n                        ariaLabel: \"tail-spin-loading\",\n                        radius: \"1\",\n                        wrapperStyle: {},\n                        wrapperClass: \"\",\n                        visible: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by path...\",\n                            className: \"w-full p-4 mb-8 rounded-md bg-gray-200 text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                            value: searchTerm,\n                            onChange: function(e) {\n                                return setSearchTerm(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"overflow-x-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                className: \"w-full table-auto border-collapse\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            className: \"bg-gray-200\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"px-4 py-2 border border-gray-500 text-center\",\n                                                    style: {\n                                                        minWidth: \"300px\"\n                                                    },\n                                                    children: \"Project Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"px-4 py-2 border border-gray-500 text-center\",\n                                                    children: \"Dependencies\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"px-4 py-2 border border-gray-500 text-center\",\n                                                    children: \"Vulnerabilties\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"update\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"from\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"FastAPI\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DependencyTable, \"hM5kSpP3esBNgrQqscvzLNNNt6w=\");\n_c = DependencyTable;\nvar _c;\n$RefreshReg$(_c, \"DependencyTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiLDhEQUFDQSxJQUFFOzBEQUFDLFNBQU87Ozs7O29EQUFLOzs7Ozs7NENBQ1Y7Ozs7OztvQ0FDRjs7Ozs7Z0NBQ0o7O2dDQUNMOzs7Ozs7Z0JBRUQ7cUJBQ0wsQ0FDSDtBQUNKLENBQUM7R0EzR3VCeEQsZUFBZTtBQUFmQSxLQUFBQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZXcuanN4PzczZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFRhaWxTcGluIH0gZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcGVuZGVuY3lUYWJsZSgpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FsbERlcGVuZGVuY2llcywgc2V0QWxsRGVwZW5kZW5jaWVzXSA9IFt7fV07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSAodXJsKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgICB9O1xuXG4gICAgICBmZXRjaCh1cmwsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHNldEFsbERlcGVuZGVuY2llcyguLi5hbGxEZXBlbmRlbmNpZXMsIGRhdGEpXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHl0aG9uRGF0YSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHB5dGhvblVybCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9weXRob24tZW52aXJvbm1lbnRzYDtcbiAgICAgIGZldGNoRGF0YShweXRob25VcmwpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRKc0RhdGEgPSAoKSA9PiB7XG4gICAgICBjb25zdCBqc1VybCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9ub2RlLWVudmlyb25tZW50c2A7XG4gICAgICBmZXRjaERhdGEoanNVcmwpO1xuICAgIH07XG5cbiAgICBnZXRQeXRob25EYXRhKCk7XG4gICAgZ2V0SnNEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkxpc3Qgb2YgRGVwZW5kZW5jaWVzPC9oMT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBwLTMgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi9ob21lXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxUYWlsU3BpblxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0Qmx1ZVwiXG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsPVwidGFpbC1zcGluLWxvYWRpbmdcIlxuICAgICAgICAgICAgICAgIHJhZGl1cz1cIjFcIlxuICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZT17e319XG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBwYXRoLi4uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBtYi04IHJvdW5kZWQtbWQgYmctZ3JheS0yMDAgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRhYmxlLWF1dG8gYm9yZGVyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIzMDBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IE5hbWVcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIFZ1bG5lcmFiaWx0aWVzXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgPHRkPnVwZGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+ZnJvbTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+RmFzdEFQSTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiVGFpbFNwaW4iLCJEZXBlbmRlbmN5VGFibGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYWxsRGVwZW5kZW5jaWVzIiwic2V0QWxsRGVwZW5kZW5jaWVzIiwiZmV0Y2hEYXRhIiwidXJsIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJyZWRpcmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldFB5dGhvbkRhdGEiLCJweXRob25VcmwiLCJwcm9jZXNzIiwiZW52IiwiQkFDS0VORF9VUkwiLCJnZXRKc0RhdGEiLCJqc1VybCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYXJpYUxhYmVsIiwicmFkaXVzIiwid3JhcHBlclN0eWxlIiwid3JhcHBlckNsYXNzIiwidmlzaWJsZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInN0eWxlIiwibWluV2lkdGgiLCJ0Ym9keSIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/view.jsx\n"));

/***/ })

});