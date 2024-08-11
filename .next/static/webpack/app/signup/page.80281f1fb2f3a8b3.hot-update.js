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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SignupPage = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messageColor, setMessageColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"text-gray-600\"); // Set initial color\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (password !== confirmPassword) {\n            setMessage(\"Passwords do not match\");\n            setMessageColor(\"text-red-500\"); // Set red color for errors\n            return;\n        }\n        try {\n            const res = await fetch(\"/api/signup\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            const data = await res.json();\n            if (res.ok) {\n                setMessage(\"Signup successful\");\n                setMessageColor(\"text-green-500\"); // Set green color for success\n                router.push(\"/generatecaption\");\n            } else {\n                setMessage(\"Error: \".concat(data.message));\n                setMessageColor(\"text-red-500\"); // Set red color for errors\n            }\n        } catch (error) {\n            setMessage(\"Error signing up\");\n            setMessageColor(\"text-red-500\"); // Set red color for errors\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center mt-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card w-full md:w-96 bg-white shadow-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                    className: \"px-10 flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"aspect-w-1 aspect-h-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: \"/pic/logoIMCU.png\",\n                                alt: \"logo for image captioning\",\n                                width: 130,\n                                height: 130\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold tracking-tight text-teal-700 mt-2\",\n                            children: \"SignUp\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-sm font-medium text-gray-900\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    className: \"mt-1 p-2 block w-full rounded-md bg-white border border-gray-300 text-black\",\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    className: \"mt-1 p-2 bg-white block w-full rounded-md border border-gray-300\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"password\",\n                                    className: \"block text-sm font-medium text-gray-900\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: \"mt-1 p-2 bg-white block w-full rounded-md border border-gray-300\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"confirmPassword\",\n                                    className: \"block text-sm font-medium text-gray-900\",\n                                    children: \"Confirm Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"confirmPassword\",\n                                    name: \"confirmPassword\",\n                                    value: confirmPassword,\n                                    onChange: (e)=>setConfirmPassword(e.target.value),\n                                    className: \"mt-1 p-2 bg-white block w-full rounded-md border border-gray-300\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"px-4 py-2 w-full bg-teal-700 text-white rounded-md hover:bg-teal-800\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, undefined),\n                        message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-sm text-center \".concat(messageColor),\n                            children: message\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-600\",\n                            children: \"Already have an account?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/login\",\n                            className: \"text-teal-700 hover:underline\",\n                            children: \"Login here\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\signup\\\\page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignupPage, \"Vslk/Xf2DztmnwVQg2TyfG1Q8e0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupPage);\nvar _c;\n$RefreshReg$(_c, \"SignupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV3QztBQUNJO0FBQ2I7QUFDRjtBQUU3QixNQUFNSyxhQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLGlCQUFpQkMsbUJBQW1CLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCwrQ0FBUUEsQ0FBQyxrQkFBa0Isb0JBQW9CO0lBQ3ZGLE1BQU1lLFNBQVNkLDBEQUFTQTtJQUV4QixNQUFNZSxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUlYLGFBQWFFLGlCQUFpQjtZQUNoQ0csV0FBVztZQUNYRSxnQkFBZ0IsaUJBQWlCLDJCQUEyQjtZQUM1RDtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1LLE1BQU0sTUFBTUMsTUFBTSxlQUFlO2dCQUNyQ0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVwQjtvQkFBT0U7Z0JBQVM7WUFDekM7WUFFQSxNQUFNbUIsT0FBTyxNQUFNUCxJQUFJUSxJQUFJO1lBRTNCLElBQUlSLElBQUlTLEVBQUUsRUFBRTtnQkFDVmhCLFdBQVc7Z0JBQ1hFLGdCQUFnQixtQkFBbUIsOEJBQThCO2dCQUNqRUMsT0FBT2MsSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTGpCLFdBQVcsVUFBdUIsT0FBYmMsS0FBS2YsT0FBTztnQkFDakNHLGdCQUFnQixpQkFBaUIsMkJBQTJCO1lBQzlEO1FBQ0YsRUFBRSxPQUFPZ0IsT0FBTztZQUNkbEIsV0FBVztZQUNYRSxnQkFBZ0IsaUJBQWlCLDJCQUEyQjtRQUM5RDtJQUNGO0lBRUEscUJBRUUsOERBQUNpQjtRQUFJQyxXQUFVO2tCQUNmLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQU9ELFdBQVU7O3NDQUNoQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUM5QixrREFBS0E7Z0NBQUNnQyxLQUFJO2dDQUFvQkMsS0FBSTtnQ0FBNEJDLE9BQU87Z0NBQUtDLFFBQVE7Ozs7Ozs7Ozs7O3NDQUVyRiw4REFBQ0M7NEJBQUdOLFdBQVU7c0NBQTJEOzs7Ozs7Ozs7Ozs7OEJBRTNFLDhEQUFDTztvQkFBS0MsVUFBVXhCOztzQ0FDZCw4REFBQ2U7NEJBQUlDLFdBQVU7OzhDQUNmLDhEQUFDUztvQ0FBTUMsU0FBUTtvQ0FBUVYsV0FBVTs4Q0FBMEM7Ozs7Ozs4Q0FDM0UsOERBQUNXO29DQUFNQyxNQUFLO29DQUFRQyxJQUFHO29DQUFRQyxNQUFLO29DQUFRZCxXQUFVO29DQUNsRGUsVUFBVSxDQUFDQyxJQUFNMUMsU0FBUzBDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQ0FDeENsQixXQUFVO29DQUNWbUIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDcEI7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FBTUMsU0FBUTtvQ0FBV1YsV0FBVTs4Q0FBMEM7Ozs7Ozs4Q0FDOUUsOERBQUNXO29DQUFNQyxNQUFLO29DQUFXQyxJQUFHO29DQUFXQyxNQUFLO29DQUFXSSxPQUFPM0M7b0NBQzFEd0MsVUFBVSxDQUFDQyxJQUFNeEMsWUFBWXdDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQ0FDM0NsQixXQUFVO29DQUNWbUIsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDcEI7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FBTUMsU0FBUTtvQ0FBa0JWLFdBQVU7OENBQTBDOzs7Ozs7OENBQ3JGLDhEQUFDVztvQ0FDQ0MsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTEksT0FBT3pDO29DQUNQc0MsVUFBVSxDQUFDQyxJQUFNdEMsbUJBQW1Cc0MsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUNsRGxCLFdBQVU7b0NBQ1ZtQixRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNwQjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ29CO2dDQUNDUixNQUFLO2dDQUNMWixXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozt3QkFJRnJCLHlCQUNDLDhEQUFDMEM7NEJBQUVyQixXQUFXLDRCQUF5QyxPQUFibkI7c0NBQ3ZDRjs7Ozs7Ozs7Ozs7OzhCQUlQLDhEQUFDb0I7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDcUI7NEJBQUVyQixXQUFVO3NDQUF3Qjs7Ozs7O3NDQUNyQyw4REFBQzdCLGlEQUFJQTs0QkFBQ21ELE1BQUs7NEJBQVN0QixXQUFVO3NDQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEU7R0F4R001Qjs7UUFNV0gsc0RBQVNBOzs7S0FOcEJHO0FBMEdOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2lnbnVwL3BhZ2UudHN4P2I2ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFNpZ251cFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjb25maXJtUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlQ29sb3IsIHNldE1lc3NhZ2VDb2xvcl0gPSB1c2VTdGF0ZSgndGV4dC1ncmF5LTYwMCcpOyAvLyBTZXQgaW5pdGlhbCBjb2xvclxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAocGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICBzZXRNZXNzYWdlKCdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyk7XHJcbiAgICAgIHNldE1lc3NhZ2VDb2xvcigndGV4dC1yZWQtNTAwJyk7IC8vIFNldCByZWQgY29sb3IgZm9yIGVycm9yc1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2lnbnVwJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBzZXRNZXNzYWdlKCdTaWdudXAgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgIHNldE1lc3NhZ2VDb2xvcigndGV4dC1ncmVlbi01MDAnKTsgLy8gU2V0IGdyZWVuIGNvbG9yIGZvciBzdWNjZXNzXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9nZW5lcmF0ZWNhcHRpb24nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRNZXNzYWdlKGBFcnJvcjogJHtkYXRhLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgc2V0TWVzc2FnZUNvbG9yKCd0ZXh0LXJlZC01MDAnKTsgLy8gU2V0IHJlZCBjb2xvciBmb3IgZXJyb3JzXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoJ0Vycm9yIHNpZ25pbmcgdXAnKTtcclxuICAgICAgc2V0TWVzc2FnZUNvbG9yKCd0ZXh0LXJlZC01MDAnKTsgLy8gU2V0IHJlZCBjb2xvciBmb3IgZXJyb3JzXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xMlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHctZnVsbCBtZDp3LTk2IGJnLXdoaXRlIHNoYWRvdy14bFwiPlxyXG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInB4LTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0xIGFzcGVjdC1oLTFcIj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcGljL2xvZ29JTUNVLnBuZ1wiIGFsdD1cImxvZ28gZm9yIGltYWdlIGNhcHRpb25pbmdcIiB3aWR0aD17MTMwfSBoZWlnaHQ9ezEzMH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXRlYWwtNzAwIG10LTJcIj5TaWduVXA8L2gxPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cIm10LTEgcC0yIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ibGFja1wiIFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgYmctd2hpdGUgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBwLTIgYmctd2hpdGUgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbmZpcm1QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgcC0yIGJnLXdoaXRlIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB3LWZ1bGwgYmctdGVhbC03MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIGhvdmVyOmJnLXRlYWwtODAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbXQtNCB0ZXh0LXNtIHRleHQtY2VudGVyICR7bWVzc2FnZUNvbG9yfWB9PlxyXG4gICAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PzwvcD5cclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTcwMCBob3Zlcjp1bmRlcmxpbmVcIj5cclxuICAgICAgICAgIExvZ2luIGhlcmVcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkxpbmsiLCJTaWdudXBQYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VDb2xvciIsInNldE1lc3NhZ2VDb2xvciIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWd1cmUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/page.tsx\n"));

/***/ })

});