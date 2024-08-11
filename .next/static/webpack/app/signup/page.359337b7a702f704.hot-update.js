"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./src/app/signup/page.tsx":
/*!*********************************!*\
  !*** ./src/app/signup/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SignupPage = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messageColor, setMessageColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"text-gray-600\"); // Set initial color\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (password !== confirmPassword) {\n            setMessage(\"Passwords do not match\");\n            setMessageColor(\"text-red-500\"); // Set red color for errors\n            return;\n        }\n        try {\n            const res = await fetch(\"/api/signup\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await res.json();\n            if (res.ok) {\n                setMessage(\"Signup successful\");\n                setMessageColor(\"text-green-500\"); // Set green color for success\n                router.push(\"/generatecaption\");\n            } else {\n                setMessage(\"Error: \".concat(data.message));\n                setMessageColor(\"text-red-500\"); // Set red color for errors\n            }\n        } catch (error) {\n            setMessage(\"Error signing up\");\n            setMessageColor(\"text-red-500\"); // Set red color for errors\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto p-4 bg-white shadow-md rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: \"block text-sm font-medium text-gray-900\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                className: \"mt-1 p-2 bg-white block w-full rounded-md border border-gray-300\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"block text-sm font-medium text-gray-900\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                className: \"mt-1 p-2 bg-white block w-full rounded-md border border-gray-300\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"confirmPassword\",\n                                className: \"block text-sm font-medium text-gray-900\",\n                                children: \"Confirm Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"confirmPassword\",\n                                name: \"confirmPassword\",\n                                value: confirmPassword,\n                                onChange: (e)=>setConfirmPassword(e.target.value),\n                                className: \"mt-1 p-2 bg-white block w-full rounded-md border border-gray-300\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"px-4 py-2 w-full bg-teal-700 text-white rounded-md hover:bg-teal-800\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4 text-sm text-center \".concat(messageColor),\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-600\",\n                        children: \"Already have an account?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/login\",\n                        className: \"text-teal-700 hover:underline\",\n                        children: \"Login here\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignupPage, \"Vslk/Xf2DztmnwVQg2TyfG1Q8e0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupPage);\nvar _c;\n$RefreshReg$(_c, \"SignupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ0k7QUFDZjtBQUU3QixNQUFNSSxhQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQyxrQkFBa0Isb0JBQW9CO0lBQ3ZGLE1BQU1jLFNBQVNiLDBEQUFTQTtJQUV4QixNQUFNYyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUlYLGFBQWFFLGlCQUFpQjtZQUNoQ0csV0FBVztZQUNYRSxnQkFBZ0IsaUJBQWlCLDJCQUEyQjtZQUM1RDtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1LLE1BQU0sTUFBTUMsTUFBTSxlQUFlO2dCQUNyQ0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVwQjtvQkFBT0U7Z0JBQVM7WUFDekM7WUFFQSxNQUFNbUIsT0FBTyxNQUFNUCxJQUFJUSxJQUFJO1lBRTNCLElBQUlSLElBQUlTLEVBQUUsRUFBRTtnQkFDVmhCLFdBQVc7Z0JBQ1hFLGdCQUFnQixtQkFBbUIsOEJBQThCO2dCQUNqRUMsT0FBT2MsSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTGpCLFdBQVcsVUFBdUIsT0FBYmMsS0FBS2YsT0FBTztnQkFDakNHLGdCQUFnQixpQkFBaUIsMkJBQTJCO1lBQzlEO1FBQ0YsRUFBRSxPQUFPZ0IsT0FBTztZQUNkbEIsV0FBVztZQUNYRSxnQkFBZ0IsaUJBQWlCLDJCQUEyQjtRQUM5RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNDOzs7Ozs7MEJBQ3BELDhEQUFDRTtnQkFBS0MsVUFBVW5COztrQ0FDZCw4REFBQ2U7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBTUMsU0FBUTtnQ0FBUUwsV0FBVTswQ0FBMEM7Ozs7OzswQ0FDM0UsOERBQUNNO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxNQUFLO2dDQUNMQyxPQUFPckM7Z0NBQ1BzQyxVQUFVLENBQUNDLElBQU10QyxTQUFTc0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUN4Q1YsV0FBVTtnQ0FDVmMsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDZjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNQyxTQUFRO2dDQUFXTCxXQUFVOzBDQUEwQzs7Ozs7OzBDQUM5RSw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xDLE9BQU9uQztnQ0FDUG9DLFVBQVUsQ0FBQ0MsSUFBTXBDLFlBQVlvQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzNDVixXQUFVO2dDQUNWYyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNmO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQU1DLFNBQVE7Z0NBQWtCTCxXQUFVOzBDQUEwQzs7Ozs7OzBDQUNyRiw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xDLE9BQU9qQztnQ0FDUGtDLFVBQVUsQ0FBQ0MsSUFBTWxDLG1CQUFtQmtDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDbERWLFdBQVU7Z0NBQ1ZjLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ2Y7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNlOzRCQUNDUixNQUFLOzRCQUNMUCxXQUFVO3NDQUNYOzs7Ozs7Ozs7OztvQkFJRnJCLHlCQUNDLDhEQUFDcUM7d0JBQUVoQixXQUFXLDRCQUF5QyxPQUFibkI7a0NBQ3ZDRjs7Ozs7Ozs7Ozs7OzBCQUlQLDhEQUFDb0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDZ0I7d0JBQUVoQixXQUFVO2tDQUF3Qjs7Ozs7O2tDQUNyQyw4REFBQzdCLGlEQUFJQTt3QkFBQzhDLE1BQUs7d0JBQVNqQixXQUFVO2tDQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRFO0dBeEdNNUI7O1FBTVdGLHNEQUFTQTs7O0tBTnBCRTtBQTBHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NpZ251cC9wYWdlLnRzeD9iNmZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgU2lnbnVwUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2VDb2xvciwgc2V0TWVzc2FnZUNvbG9yXSA9IHVzZVN0YXRlKCd0ZXh0LWdyYXktNjAwJyk7IC8vIFNldCBpbml0aWFsIGNvbG9yXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgICAgc2V0TWVzc2FnZUNvbG9yKCd0ZXh0LXJlZC01MDAnKTsgLy8gU2V0IHJlZCBjb2xvciBmb3IgZXJyb3JzXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zaWdudXAnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoJ1NpZ251cCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgICAgc2V0TWVzc2FnZUNvbG9yKCd0ZXh0LWdyZWVuLTUwMCcpOyAvLyBTZXQgZ3JlZW4gY29sb3IgZm9yIHN1Y2Nlc3NcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2dlbmVyYXRlY2FwdGlvbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoYEVycm9yOiAke2RhdGEubWVzc2FnZX1gKTtcclxuICAgICAgICBzZXRNZXNzYWdlQ29sb3IoJ3RleHQtcmVkLTUwMCcpOyAvLyBTZXQgcmVkIGNvbG9yIGZvciBlcnJvcnNcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TWVzc2FnZSgnRXJyb3Igc2lnbmluZyB1cCcpO1xyXG4gICAgICBzZXRNZXNzYWdlQ29sb3IoJ3RleHQtcmVkLTUwMCcpOyAvLyBTZXQgcmVkIGNvbG9yIGZvciBlcnJvcnNcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIHAtNCBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1tZFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj5TaWduIFVwPC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHAtMiBiZy13aGl0ZSBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIHAtMiBiZy13aGl0ZSBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1QYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgYmctd2hpdGUgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHctZnVsbCBiZy10ZWFsLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgaG92ZXI6YmctdGVhbC04MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtdC00IHRleHQtc20gdGV4dC1jZW50ZXIgJHttZXNzYWdlQ29sb3J9YH0+XHJcbiAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/PC9wPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNzAwIGhvdmVyOnVuZGVybGluZVwiPlxyXG4gICAgICAgICAgTG9naW4gaGVyZVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiU2lnbnVwUGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlQ29sb3IiLCJzZXRNZXNzYWdlQ29sb3IiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9rIiwicHVzaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/page.tsx\n"));

/***/ })

});