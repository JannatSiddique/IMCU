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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_AiOutlineShareAlt_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineShareAlt!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import the share icon\nconst ImageCaptionGenerator = ()=>{\n    _s();\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [caption, setCaption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleImageChange = (event)=>{\n        var _event_target_files;\n        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (file) {\n            setSelectedImage(URL.createObjectURL(file));\n        }\n    };\n    const handleCaptionChange = (event)=>{\n        setCaption(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mb-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-black\",\n                        children: \"Generate Caption\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mt-2 mb-10 justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[80px] h-1 rounded-full bg-teal-600 inline-flex\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row items-center justify-start md:justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-4 mb-4 mt-3 ml-11 md:mb-0 md:ml-36\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-96 h-80 mb-16 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 \".concat(selectedImage ? \"bg-gray-100\" : \"\"),\n                            children: [\n                                !selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Drag & drop image here\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"file-input\",\n                                            className: \"absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center cursor-pointer\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"file-input\",\n                                            type: \"file\",\n                                            accept: \"image/*\",\n                                            className: \"hidden\",\n                                            onChange: handleImageChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true),\n                                selectedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: selectedImage,\n                                    alt: \"Uploaded\",\n                                    width: 300,\n                                    height: 300\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: caption,\n                                onChange: handleCaptionChange,\n                                placeholder: \"Generating Caption\",\n                                className: \"w-96 h-32 border-4 border-teal-700 border-solid bg-transparent outline-none px-10 mb-24 ml-6 mt-14 shadow-lg font-serif text-teal-700\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineShareAlt_react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineShareAlt, {\n                                className: \"absolute bottom-10 text-teal-700 text-2xl cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MY PC\\\\Documents\\\\IMCU - Copy\\\\my-app\\\\src\\\\app\\\\generatecaption\\\\page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageCaptionGenerator, \"j0fZ9UcNqo53nvuHdAcBLsKKjKU=\");\n_c = ImageCaptionGenerator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCaptionGenerator);\nvar _c;\n$RefreshReg$(_c, \"ImageCaptionGenerator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2VuZXJhdGVjYXB0aW9uL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3FEO0FBQ3RCO0FBQ29CLENBQUMsd0JBQXdCO0FBRTVFLE1BQU1JLHdCQUFrQzs7SUFDdEMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0wsK0NBQVFBLENBQWdCO0lBQ2xFLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBUztJQUUvQyxNQUFNUSxvQkFBb0IsQ0FBQ0M7WUFDWkE7UUFBYixNQUFNQyxRQUFPRCxzQkFBQUEsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLGNBQWxCSCwwQ0FBQUEsbUJBQW9CLENBQUMsRUFBRTtRQUNwQyxJQUFJQyxNQUFNO1lBQ1JMLGlCQUFpQlEsSUFBSUMsZUFBZSxDQUFDSjtRQUN2QztJQUNGO0lBRUEsTUFBTUssc0JBQXNCLENBQUNOO1FBQzNCRixXQUFXRSxNQUFNRSxNQUFNLENBQUNLLEtBQUs7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUEyRTs7Ozs7O2tDQUd6Riw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUNDQyxXQUFXLHlHQUVWLE9BRENkLGdCQUFnQixnQkFBZ0I7O2dDQUdqQyxDQUFDQSwrQkFDQTs7c0RBQ0UsOERBQUNnQjtzREFBRTs7Ozs7O3NEQUNILDhEQUFDQzs0Q0FDQ0MsU0FBUTs0Q0FDUkosV0FBVTs7Ozs7O3NEQUlaLDhEQUFDSzs0Q0FDQ0MsSUFBRzs0Q0FDSEMsTUFBSzs0Q0FDTEMsUUFBTzs0Q0FDUFIsV0FBVTs0Q0FDVlMsVUFBVW5COzs7Ozs7OztnQ0FJZkosK0JBQ0MsOERBQUNILGtEQUFLQTtvQ0FBQzJCLEtBQUt4QjtvQ0FBZXlCLEtBQUk7b0NBQVdDLE9BQU87b0NBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtwRSw4REFBQ2Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FDQ0UsTUFBSztnQ0FDTFQsT0FBT1Y7Z0NBQ1BxQixVQUFVWjtnQ0FDVmlCLGFBQVk7Z0NBQ1pkLFdBQVU7Ozs7OzswQ0FHWiw4REFBQ2hCLHNHQUFpQkE7Z0NBQUNnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkM7R0F2RU1mO0tBQUFBO0FBeUVOLCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9nZW5lcmF0ZWNhcHRpb24vcGFnZS50c3g/ZmZiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVTaGFyZUFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJzsgLy8gSW1wb3J0IHRoZSBzaGFyZSBpY29uXHJcblxyXG5jb25zdCBJbWFnZUNhcHRpb25HZW5lcmF0b3I6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEltYWdlLCBzZXRTZWxlY3RlZEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtjYXB0aW9uLCBzZXRDYXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkSW1hZ2UoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FwdGlvbkNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldENhcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMCBcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2Nyb2xsLW0tMjAgdGV4dC14bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCBsZzp0ZXh0LTJ4bCB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICBHZW5lcmF0ZSBDYXB0aW9uXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMiBtYi0xMCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs4MHB4XSBoLTEgcm91bmRlZC1mdWxsIGJnLXRlYWwtNjAwIGlubGluZS1mbGV4XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgbWQ6anVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCBtYi00IG10LTMgbWwtMTEgbWQ6bWItMCBtZDptbC0zNlwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTk2IGgtODAgbWItMTYgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTUwMCAke1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2UgPyAnYmctZ3JheS0xMDAnIDogJydcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHshc2VsZWN0ZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxwPkRyYWcgJiBkcm9wIGltYWdlIGhlcmU8L3A+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpbGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8QWlPdXRsaW5lUGx1cyBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImZpbGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2VsZWN0ZWRJbWFnZX0gYWx0PVwiVXBsb2FkZWRcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y2FwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhcHRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR2VuZXJhdGluZyBDYXB0aW9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy05NiBoLTMyIGJvcmRlci00IGJvcmRlci10ZWFsLTcwMCBib3JkZXItc29saWQgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIHB4LTEwIG1iLTI0IG1sLTYgbXQtMTQgc2hhZG93LWxnIGZvbnQtc2VyaWYgdGV4dC10ZWFsLTcwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIEljb24gcGxhY2VkIGF0IHRoZSBib3R0b20gcmlnaHQgKi99XHJcbiAgICAgICAgICA8QWlPdXRsaW5lU2hhcmVBbHQgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEwIHRleHQtdGVhbC03MDAgdGV4dC0yeGwgY3Vyc29yLXBvaW50ZXJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcHRpb25HZW5lcmF0b3I7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJBaU91dGxpbmVTaGFyZUFsdCIsIkltYWdlQ2FwdGlvbkdlbmVyYXRvciIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwiY2FwdGlvbiIsInNldENhcHRpb24iLCJoYW5kbGVJbWFnZUNoYW5nZSIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2FwdGlvbkNoYW5nZSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJhY2NlcHQiLCJvbkNoYW5nZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/generatecaption/page.tsx\n"));

/***/ })

});