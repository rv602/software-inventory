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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DependencyTable)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ \"../node_modules/react-loader-spinner/dist/esm/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"process\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction DependencyTable() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), searchTerm = ref[0], setSearchTerm = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = [\n        {}\n    ], allDependencies = ref2[0], setAllDependencies = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchData = function(url) {\n            setLoading(true);\n            var requestOptions = {\n                method: \"GET\",\n                redirect: \"follow\"\n            };\n            fetch(url, requestOptions).then(function(response) {\n                return response.json();\n            }).then(function(data) {\n                console.log(data);\n                setLoading(false);\n            }).catch(function(error) {\n                console.log(\"error\", error);\n                setLoading(false);\n            });\n        };\n        var getPythonData = function() {\n            var pythonUrl = \"\".concat(process.env.BACKEND_URL, \"/python-environments\");\n            fetchData(pythonUrl);\n        };\n        var getJsData = function() {\n            var jsUrl = \"\".concat(process.env.BACKEND_URL, \"/node-environments\");\n            fetchData(jsUrl);\n        };\n        getPythonData();\n        getJsData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"List of Dependencies\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 p-3 rounded-md\",\n                            onClick: function() {\n                                return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/home\");\n                            },\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.TailSpin, {\n                        height: \"40\",\n                        width: \"40\",\n                        color: \"lightBlue\",\n                        ariaLabel: \"tail-spin-loading\",\n                        radius: \"1\",\n                        wrapperStyle: {},\n                        wrapperClass: \"\",\n                        visible: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by path...\",\n                            className: \"w-full p-4 mb-8 rounded-md bg-gray-200 text-center text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                            value: searchTerm,\n                            onChange: function(e) {\n                                return setSearchTerm(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"overflow-x-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                className: \"w-full table-auto border-collapse\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            className: \"bg-gray-200\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"px-4 py-2 border border-gray-500 text-center\",\n                                                    style: {\n                                                        minWidth: \"300px\"\n                                                    },\n                                                    children: \"Project Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"px-4 py-2 border border-gray-500 text-center\",\n                                                    children: \"Dependencies\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    className: \"px-4 py-2 border border-gray-500 text-center\",\n                                                    children: \"Vulnerabilties\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"update\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"from\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: \"FastAPI\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rajagopalan/Desktop/software-inventory/renderer/pages/view.jsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(DependencyTable, \"hM5kSpP3esBNgrQqscvzLNNNt6w=\");\n_c = DependencyTable;\nvar _c;\n$RefreshReg$(_c, \"DependencyTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Z0JBRUQ7cUJBQ0wsQ0FDSDtBQUNKLENBQUM7R0ExR3VCeEQsZUFBZTtBQUFmQSxLQUFBQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZXcuanN4PzczZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFRhaWxTcGluIH0gZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcGVuZGVuY3lUYWJsZSgpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FsbERlcGVuZGVuY2llcywgc2V0QWxsRGVwZW5kZW5jaWVzXSA9IFt7fV07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSAodXJsKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgICB9O1xuXG4gICAgICBmZXRjaCh1cmwsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFB5dGhvbkRhdGEgPSAoKSA9PiB7XG4gICAgICBjb25zdCBweXRob25VcmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vcHl0aG9uLWVudmlyb25tZW50c2A7XG4gICAgICBmZXRjaERhdGEocHl0aG9uVXJsKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SnNEYXRhID0gKCkgPT4ge1xuICAgICAgY29uc3QganNVcmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vbm9kZS1lbnZpcm9ubWVudHNgO1xuICAgICAgZmV0Y2hEYXRhKGpzVXJsKTtcbiAgICB9O1xuXG4gICAgZ2V0UHl0aG9uRGF0YSgpO1xuICAgIGdldEpzRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5MaXN0IG9mIERlcGVuZGVuY2llczwvaDE+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC0zIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvaG9tZVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8VGFpbFNwaW5cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodEJsdWVcIlxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbD1cInRhaWwtc3Bpbi1sb2FkaW5nXCJcbiAgICAgICAgICAgICAgICByYWRpdXM9XCIxXCJcbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxuICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzcz1cIlwiXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17bG9hZGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgcGF0aC4uLlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTQgbWItOCByb3VuZGVkLW1kIGJnLWdyYXktMjAwIHRleHQtY2VudGVyIHRleHQtZ3JheS04MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0YWJsZS1hdXRvIGJvcmRlci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IFwiMzAwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBOYW1lXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIERlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS01MDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBWdWxuZXJhYmlsdGllc1xuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIDx0ZD51cGRhdGU8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPmZyb208L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPkZhc3RBUEk8L3RkPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdXRlciIsIlRhaWxTcGluIiwiRGVwZW5kZW5jeVRhYmxlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFsbERlcGVuZGVuY2llcyIsInNldEFsbERlcGVuZGVuY2llcyIsImZldGNoRGF0YSIsInVybCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwicmVkaXJlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJnZXRQeXRob25EYXRhIiwicHl0aG9uVXJsIiwicHJvY2VzcyIsImVudiIsIkJBQ0tFTkRfVVJMIiwiZ2V0SnNEYXRhIiwianNVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsImFyaWFMYWJlbCIsInJhZGl1cyIsIndyYXBwZXJTdHlsZSIsIndyYXBwZXJDbGFzcyIsInZpc2libGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzdHlsZSIsIm1pbldpZHRoIiwidGJvZHkiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/view.jsx\n"));

/***/ })

});