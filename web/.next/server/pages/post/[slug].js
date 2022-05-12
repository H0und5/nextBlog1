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
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"yp565nvo\",\n    dataset: \"production\",\n    useCdn: true // `false` if you want to ensure fresh data\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsWUFBWTtBQUM4QjtBQUUxQyxpRUFBZUEscURBQVksQ0FBQztJQUMxQkMsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxNQUFNLEVBQUUsSUFBSSxDQUFDLDJDQUEyQztDQUN6RCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9jbGllbnQuanM/OTcxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQuanNcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6ICd5cDU2NW52bycsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSk7Il0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// [slug].js\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , body =[]  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n                            lineNumber: 43,\n                            columnNumber: 39\n                        }, undefined)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/om/Documents/Code/Practice/Side/nextSanityBlog/web/pages/post/[slug].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  body\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBREEsWUFBWTtBQUNXO0FBQ3dCO0FBQ0M7QUFDZjtBQUVqQyxTQUFTSSxNQUFNLENBQUVDLE1BQU0sRUFBRTtJQUN2QixPQUFPSix3REFBZSxDQUFDRSwrQ0FBTSxDQUFDLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0NBQzdDO0FBRUQsTUFBTUUsWUFBWSxHQUFHO0lBQ25CQyxLQUFLLEVBQUU7UUFDTEYsS0FBSyxFQUFFLENBQUMsRUFBRUcsS0FBSyxHQUFFLEdBQUs7Z0JBQ2ZBLEdBQVk7WUFBakIsSUFBSSxDQUFDQSxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEdBQVksR0FBWkEsS0FBSyxDQUFFQyxLQUFLLGNBQVpELEdBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxHQUFZLENBQUVFLElBQUksQ0FBTixFQUFRO2dCQUN2QixPQUFPLElBQUk7YUFDWjtZQUNELHFCQUNFLDhEQUFDQyxLQUFHO2dCQUNGQyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ksR0FBRyxJQUFJLEdBQUc7Z0JBQ3JCQyxPQUFPLEVBQUMsTUFBTTtnQkFDZEMsR0FBRyxFQUFFWCxNQUFNLENBQUNLLEtBQUssQ0FBQyxDQUFDTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozt5QkFDbkUsQ0FDSDtTQUNGO0tBQ0Y7Q0FDRjtBQUVELE1BQU1DLElBQUksR0FBRyxDQUFDLEVBQUNDLElBQUksR0FBQyxHQUFLO0lBQ3ZCLE1BQU0sRUFDSkMsS0FBSyxFQUFHLGVBQWUsR0FDdkJDLElBQUksRUFBRyxjQUFjLEdBQ3JCQyxVQUFVLEdBQ1ZDLFdBQVcsR0FDWEMsSUFBSSxFQUFHLEVBQUUsR0FDVixHQUFHTCxJQUFJO0lBQ1IscUJBQ0UsOERBQUNNLFNBQU87OzBCQUNOLDhEQUFDQyxJQUFFOzBCQUFFTixLQUFLOzs7Ozt5QkFBTTswQkFDaEIsOERBQUNPLE1BQUk7O29CQUFDLEtBQUc7b0JBQUNOLElBQUk7Ozs7Ozt5QkFBUTtZQUNyQkMsVUFBVSxrQkFDVCw4REFBQ00sSUFBRTs7b0JBQUMsV0FFRjtvQkFBQ04sVUFBVSxDQUFDTyxHQUFHLENBQUNDLENBQUFBLFFBQVEsaUJBQUksOERBQUNDLElBQUU7c0NBQWlCRCxRQUFROzJCQUFuQkEsUUFBUTs7OztxQ0FBaUI7b0JBQUEsQ0FBQzs7Ozs7O3lCQUM1RDtZQUVOUCxXQUFXLGtCQUNWLDhEQUFDUyxLQUFHOzBCQUNGLDRFQUFDdEIsS0FBRztvQkFDRkcsR0FBRyxFQUFFWCxNQUFNLENBQUNxQixXQUFXLENBQUMsQ0FDckJULEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDVG1CLEdBQUcsRUFBRTtvQkFDUnRCLEdBQUcsRUFBRSxDQUFDLEVBQUVVLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7OzZCQUN4Qjs7Ozs7eUJBQ0U7MEJBRVIsOERBQUNyQiw2REFBWTtnQkFDWE8sS0FBSyxFQUFFaUIsSUFBSTtnQkFDWFUsVUFBVSxFQUFFN0IsWUFBWTs7Ozs7eUJBQ3hCOzs7Ozs7aUJBQ00sQ0FDWDtDQUNGO0FBRUQsTUFBTThCLEtBQUssR0FBR3JDLDZDQUFJLENBQUM7Ozs7OztDQU1sQixDQUFDO0FBQ0ssZUFBZXNDLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxLQUFLLEdBQUcsTUFBTXBDLHFEQUFZLENBQzlCSCw2Q0FBSSxDQUFDLDBEQUEwRCxDQUFDLENBQ2pFO0lBRUQsT0FBTztRQUNMdUMsS0FBSyxFQUFFQSxLQUFLLENBQUNSLEdBQUcsQ0FBQyxDQUFDVSxJQUFJLEdBQUssQ0FBQztnQkFBQ0MsTUFBTSxFQUFFO29CQUFDRCxJQUFJO2lCQUFDO2FBQUMsQ0FBQztRQUFBLENBQUM7UUFDOUNFLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRjtBQUVNLGVBQWVDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFO0lBQzVDLDJFQUEyRTtJQUMzRSxNQUFNLEVBQUVKLElBQUksRUFBRyxFQUFFLEdBQUUsR0FBR0ksT0FBTyxDQUFDSCxNQUFNO0lBQ3BDLE1BQU1yQixJQUFJLEdBQUcsTUFBTWxCLHFEQUFZLENBQUNrQyxLQUFLLEVBQUU7UUFBRUksSUFBSTtLQUFFLENBQUM7SUFDaEQsT0FBTztRQUNMSyxLQUFLLEVBQUU7WUFDTHpCLElBQUk7U0FDTDtLQUNGO0NBQ0Y7QUFDRCxpRUFBZUQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbmltcG9ydCB7UG9ydGFibGVUZXh0fSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IHB0Q29tcG9uZW50cyA9IHtcbiAgdHlwZXM6IHtcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZT8uYXNzZXQ/Ll9yZWYpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCAnICd9XG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKS53aWR0aCgzMjApLmhlaWdodCgyNDApLmZpdCgnbWF4JykuYXV0bygnZm9ybWF0Jyl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJyxcbiAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBhdXRob3JJbWFnZSxcbiAgICBib2R5ID0gW11cbiAgfSA9IHBvc3RcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cbiAgICAgIHtjYXRlZ29yaWVzICYmIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIFBvc3RlZCBpblxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKVxuICAgICAgICAgICAgICAud2lkdGgoNTApXG4gICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAgIGFsdD17YCR7bmFtZX0ncyBwaWN0dXJlYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8UG9ydGFibGVUZXh0XG4gICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9XG4gICAgICAvPlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICB0aXRsZSxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgYm9keVxufWBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gIClcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXNcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3RcblxuIl0sIm5hbWVzIjpbImdyb3EiLCJpbWFnZVVybEJ1aWxkZXIiLCJQb3J0YWJsZVRleHQiLCJjbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInB0Q29tcG9uZW50cyIsInR5cGVzIiwidmFsdWUiLCJhc3NldCIsIl9yZWYiLCJpbWciLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmaXQiLCJhdXRvIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJib2R5IiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsImRpdiIsInVybCIsImNvbXBvbmVudHMiLCJxdWVyeSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();