"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/generatecaption/page",{

/***/ "(app-pages-browser)/./src/app/generatecaption/page.tsx":
/*!******************************************!*\
  !*** ./src/app/generatecaption/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_FaFacebookF_FaTwitter_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaFacebookF,FaTwitter!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FiType_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FiType!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import Facebook and Twitter icons\n // Import the change font icon\nconst ImageCaptionGenerator = ()=>{\n    _s();\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [caption, setCaption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fontStyle, setFontStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"font-serif\");\n    const handleImageChange = (event)=>{\n        var _event_target_files;\n        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (file) {\n            setSelectedImage(URL.createObjectURL(file));\n        }\n    };\n    const handleCaptionChange = (event)=>{\n        setCaption(event.target.value);\n    };\n    const handleFontChange = ()=>{\n        setFontStyle((prev)=>prev === \"font-serif\" ? \"font-sans\" : \"font-serif\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-black\",\n                        children: \"Generate Caption\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mt-2 mb-10 justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[80px] h-1 rounded-full bg-teal-600 inline-flex\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row items-center justify-start md:justify-start ml\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-4 mb-4 mt-3 md:mb-0 md:ml-36\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-96 h-80 mb-16 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 \".concat(selectedImage ? \"bg-gray-100\" : \"\"),\n                            children: [\n                                !selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Drag & drop image here\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"file-input\",\n                                            className: \"absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center cursor-pointer\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"file-input\",\n                                            type: \"file\",\n                                            accept: \"image/*\",\n                                            className: \"hidden\",\n                                            onChange: handleImageChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true),\n                                selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: selectedImage,\n                                    alt: \"Uploaded\",\n                                    width: 300,\n                                    height: 300\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: caption,\n                                onChange: handleCaptionChange,\n                                placeholder: \"Generating Caption in Urdu\",\n                                className: \"w-96 h-32 border-4 border-teal-700 border-solid bg-transparent outline-none px-10 mb-24 ml-6 mt-14 shadow-lg text-teal-700 \".concat(fontStyle)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute bottom-12 right-6 flex space-x-3 text-teal-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFacebookF_FaTwitter_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaFacebookF, {\n                                        className: \"text-xl cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFacebookF_FaTwitter_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTwitter, {\n                                        className: \"text-xl cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiType_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiType, {\n                                        className: \"text-xl cursor-pointer\",\n                                        onClick: handleFontChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageCaptionGenerator, \"4rtb+X5aZRvgvQ41OViLZBqj0nM=\");\n_c = ImageCaptionGenerator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCaptionGenerator);\nvar _c;\n$RefreshReg$(_c, \"ImageCaptionGenerator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2VuZXJhdGVjYXB0aW9uL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNxRDtBQUN0QjtBQUN5QixDQUFDLG9DQUFvQztBQUNyRCxDQUFDLDhCQUE4QjtBQUV2RSxNQUFNTSx3QkFBa0M7O0lBQ3RDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFnQjtJQUNsRSxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFTO0lBRW5ELE1BQU1ZLG9CQUFvQixDQUFDQztZQUNaQTtRQUFiLE1BQU1DLFFBQU9ELHNCQUFBQSxNQUFNRSxNQUFNLENBQUNDLEtBQUssY0FBbEJILDBDQUFBQSxtQkFBb0IsQ0FBQyxFQUFFO1FBQ3BDLElBQUlDLE1BQU07WUFDUlAsaUJBQWlCVSxJQUFJQyxlQUFlLENBQUNKO1FBQ3ZDO0lBQ0Y7SUFFQSxNQUFNSyxzQkFBc0IsQ0FBQ047UUFDM0JKLFdBQVdJLE1BQU1FLE1BQU0sQ0FBQ0ssS0FBSztJQUMvQjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QlYsYUFBYSxDQUFDVyxPQUNaQSxTQUFTLGVBQWUsY0FBYztJQUUxQztJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQTJFOzs7Ozs7a0NBR3pGLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQ0NDLFdBQVcseUdBRVYsT0FEQ2xCLGdCQUFnQixnQkFBZ0I7O2dDQUdqQyxDQUFDQSwrQkFDQTs7c0RBQ0UsOERBQUNvQjtzREFBRTs7Ozs7O3NEQUNILDhEQUFDQzs0Q0FDQ0MsU0FBUTs0Q0FDUkosV0FBVTs7Ozs7O3NEQUlaLDhEQUFDSzs0Q0FDQ0MsSUFBRzs0Q0FDSEMsTUFBSzs0Q0FDTEMsUUFBTzs0Q0FDUFIsV0FBVTs0Q0FDVlMsVUFBVXJCOzs7Ozs7OztnQ0FJZk4sK0JBQ0MsOERBQUNMLGtEQUFLQTtvQ0FDSmlDLEtBQUs1QjtvQ0FDTDZCLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1oQiw4REFBQ2Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FDQ0UsTUFBSztnQ0FDTFgsT0FBT1o7Z0NBQ1B5QixVQUFVZDtnQ0FDVm1CLGFBQVk7Z0NBQ1pkLFdBQVcsOEhBQXdJLE9BQVZkOzs7Ozs7MENBRzNJLDhEQUFDYTtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUN0QixvR0FBV0E7d0NBQUNzQixXQUFVOzs7Ozs7a0RBQ3ZCLDhEQUFDckIsa0dBQVNBO3dDQUFDcUIsV0FBVTs7Ozs7O2tEQUNyQiw4REFBQ3BCLGdGQUFNQTt3Q0FDTG9CLFdBQVU7d0NBQ1ZlLFNBQVNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCO0dBM0ZNaEI7S0FBQUE7QUE2Rk4sK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2dlbmVyYXRlY2FwdGlvbi9wYWdlLnRzeD9mZmJiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFUd2l0dGVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7IC8vIEltcG9ydCBGYWNlYm9vayBhbmQgVHdpdHRlciBpY29uc1xyXG5pbXBvcnQgeyBGaVR5cGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjsgLy8gSW1wb3J0IHRoZSBjaGFuZ2UgZm9udCBpY29uXHJcblxyXG5jb25zdCBJbWFnZUNhcHRpb25HZW5lcmF0b3I6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEltYWdlLCBzZXRTZWxlY3RlZEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtjYXB0aW9uLCBzZXRDYXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2ZvbnRTdHlsZSwgc2V0Rm9udFN0eWxlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJmb250LXNlcmlmXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkSW1hZ2UoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FwdGlvbkNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldENhcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGb250Q2hhbmdlID0gKCkgPT4ge1xyXG4gICAgc2V0Rm9udFN0eWxlKChwcmV2KSA9PlxyXG4gICAgICBwcmV2ID09PSBcImZvbnQtc2VyaWZcIiA/IFwiZm9udC1zYW5zXCIgOiBcImZvbnQtc2VyaWZcIlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzY3JvbGwtbS0yMCB0ZXh0LXhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IGxnOnRleHQtMnhsIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgIEdlbmVyYXRlIENhcHRpb25cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0yIG1iLTEwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwcHhdIGgtMSByb3VuZGVkLWZ1bGwgYmctdGVhbC02MDAgaW5saW5lLWZsZXhcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBtZDpqdXN0aWZ5LXN0YXJ0IG1sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IG1iLTQgbXQtMyBtZDptYi0wIG1kOm1sLTM2XCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctOTYgaC04MCBtYi0xNiBib3JkZXItMiBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktNTAwICR7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZSA/IFwiYmctZ3JheS0xMDBcIiA6IFwiXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHshc2VsZWN0ZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwPkRyYWcgJiBkcm9wIGltYWdlIGhlcmU8L3A+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpbGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8QWlPdXRsaW5lUGx1cyBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImZpbGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVcGxvYWRlZFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y2FwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcHRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR2VuZXJhdGluZyBDYXB0aW9uIGluIFVyZHVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTk2IGgtMzIgYm9yZGVyLTQgYm9yZGVyLXRlYWwtNzAwIGJvcmRlci1zb2xpZCBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgcHgtMTAgbWItMjQgbWwtNiBtdC0xNCBzaGFkb3ctbGcgdGV4dC10ZWFsLTcwMCAke2ZvbnRTdHlsZX1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHsvKiBJY29ucyBwbGFjZWQgYXQgdGhlIGJvdHRvbSByaWdodCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEyIHJpZ2h0LTYgZmxleCBzcGFjZS14LTMgdGV4dC10ZWFsLTcwMFwiPlxyXG4gICAgICAgICAgICA8RmFGYWNlYm9va0YgY2xhc3NOYW1lPVwidGV4dC14bCBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICAgIDxGYVR3aXR0ZXIgY2xhc3NOYW1lPVwidGV4dC14bCBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICAgIDxGaVR5cGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGb250Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcHRpb25HZW5lcmF0b3I7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJGYUZhY2Vib29rRiIsIkZhVHdpdHRlciIsIkZpVHlwZSIsIkltYWdlQ2FwdGlvbkdlbmVyYXRvciIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwiY2FwdGlvbiIsInNldENhcHRpb24iLCJmb250U3R5bGUiLCJzZXRGb250U3R5bGUiLCJoYW5kbGVJbWFnZUNoYW5nZSIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2FwdGlvbkNoYW5nZSIsInZhbHVlIiwiaGFuZGxlRm9udENoYW5nZSIsInByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/generatecaption/page.tsx\n"));

/***/ })

});