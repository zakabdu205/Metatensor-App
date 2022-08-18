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
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./helpers/getpost.js":
/*!****************************!*\
  !*** ./helpers/getpost.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPost)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getPost(slug) {\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(`pages/posts/${slug}.mdx`), \"utf8\");\n    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    return {\n        data,\n        content\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2dldHBvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvQjtBQUNJO0FBQ1M7QUFFbEIsU0FBU0csT0FBTyxDQUFDQyxJQUFJLEVBQUU7SUFDcEMsTUFBTUMsWUFBWSxHQUFHTCxzREFBZSxDQUNsQ0MsZ0RBQVMsQ0FBQyxDQUFDLFlBQVksRUFBRUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3BDLE1BQU0sQ0FDUDtJQUNELE1BQU0sRUFBRUksSUFBSSxHQUFFQyxPQUFPLEdBQUUsR0FBR1Asa0RBQU0sQ0FBQ0csWUFBWSxDQUFDO0lBQzlDLE9BQU87UUFDTEcsSUFBSTtRQUNKQyxPQUFPO0tBQ1IsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YXRlbnNvci1hcHAvLi9oZWxwZXJzL2dldHBvc3QuanM/NmM4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UG9zdChzbHVnKSB7XG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhcbiAgICBwYXRoLmpvaW4oYHBhZ2VzL3Bvc3RzLyR7c2x1Z30ubWR4YCksXG4gICAgXCJ1dGY4XCJcbiAgKTtcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIGNvbnRlbnQsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwiZ2V0UG9zdCIsInNsdWciLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJqb2luIiwiZGF0YSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/getpost.js\n");

/***/ }),

/***/ "./helpers/getposts.js":
/*!*****************************!*\
  !*** ./helpers/getposts.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getPosts() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(\"pages/posts\"));\n    const allPostsData = files.map((fileName)=>{\n        const slug = fileName.replace(\".mdx\", \"\");\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(`pages/posts/${slug}.mdx`), \"utf8\");\n        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n        return {\n            slug,\n            data\n        };\n    });\n    return allPostsData;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2dldHBvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUNTO0FBRWxCLFNBQVNHLFFBQVEsR0FBRztJQUNqQyxNQUFNQyxLQUFLLEdBQUdKLHFEQUFjLENBQUNDLGdEQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsTUFBTU0sWUFBWSxHQUFHSCxLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEdBQUs7UUFDM0MsTUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBQ3pDLE1BQU1DLFlBQVksR0FBR1osc0RBQWUsQ0FDbENDLGdEQUFTLENBQUMsQ0FBQyxZQUFZLEVBQUVTLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNwQyxNQUFNLENBQ1A7UUFDRCxNQUFNLEVBQUVJLElBQUksR0FBRSxHQUFHWixrREFBTSxDQUFDVSxZQUFZLENBQUM7UUFDckMsT0FBTztZQUFFRixJQUFJO1lBQUVJLElBQUk7U0FBRSxDQUFDO0tBQ3ZCLENBQUM7SUFDRixPQUFPUCxZQUFZLENBQUM7Q0FDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhdGVuc29yLWFwcC8uL2hlbHBlcnMvZ2V0cG9zdHMuanM/ZDdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKFwicGFnZXMvcG9zdHNcIikpO1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBmaWxlcy5tYXAoKGZpbGVOYW1lKSA9PiB7XG4gICAgY29uc3Qgc2x1ZyA9IGZpbGVOYW1lLnJlcGxhY2UoXCIubWR4XCIsIFwiXCIpO1xuICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhcbiAgICAgIHBhdGguam9pbihgcGFnZXMvcG9zdHMvJHtzbHVnfS5tZHhgKSxcbiAgICAgIFwidXRmOFwiXG4gICAgKTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xuICAgIHJldHVybiB7IHNsdWcsIGRhdGEgfTtcbiAgfSk7XG4gIHJldHVybiBhbGxQb3N0c0RhdGE7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwiZ2V0UG9zdHMiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwiam9pbiIsImFsbFBvc3RzRGF0YSIsIm1hcCIsImZpbGVOYW1lIiwic2x1ZyIsInJlcGxhY2UiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/getposts.js\n");

/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_getposts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getposts */ \"./helpers/getposts.js\");\n/* harmony import */ var _helpers_getpost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/getpost */ \"./helpers/getpost.js\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__]);\n([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n// Creating Dynamic Route for the posts as an array to create links between the blog page and post.\n\n\n\n // Used with Serlization to get clean content from mdx files and could be put in component to style them.\nfunction Post({ data , content  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-7xl mt-24 mb-12\",\n                children: data.title\n            }, void 0, false, {\n                fileName: \"/Users/main/Documents/GitHub/Metatensor-App/pages/[slug].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                className: \"text-gray-500 italic\",\n                children: data.date\n            }, void 0, false, {\n                fileName: \"/Users/main/Documents/GitHub/Metatensor-App/pages/[slug].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"prose mt-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_4__.MDXRemote, {\n                    ...content\n                }, void 0, false, {\n                    fileName: \"/Users/main/Documents/GitHub/Metatensor-App/pages/[slug].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/main/Documents/GitHub/Metatensor-App/pages/[slug].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/main/Documents/GitHub/Metatensor-App/pages/[slug].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\nconst getStaticPaths = async ()=>{\n    const posts = await (0,_helpers_getposts__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const paths = posts.map((post)=>({\n            params: {\n                slug: post.slug\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params  })=>{\n    const post = await (0,_helpers_getpost__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params.slug);\n    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(post.content);\n    return {\n        props: {\n            data: post.data,\n            content: mdxSource\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFEQSxtR0FBbUc7QUFDeEQ7QUFDRjtBQUNhO0FBQ1YsQ0FBQyx5R0FBeUc7QUFFdkksU0FBU0ksSUFBSSxDQUFDLEVBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFFLEVBQUU7SUFDOUMscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsZ0NBQWdDOzBCQUFFSixJQUFJLENBQUNLLEtBQUs7Ozs7O29CQUFNOzBCQUNoRSw4REFBQ0MsTUFBSTtnQkFBQ0YsU0FBUyxFQUFDLHNCQUFzQjswQkFBRUosSUFBSSxDQUFDTyxJQUFJOzs7OztvQkFBUTswQkFDekQsOERBQUNDLEdBQUM7Z0JBQUNKLFNBQVMsRUFBQyxhQUFhOzBCQUN4Qiw0RUFBQ04sc0RBQVM7b0JBQUUsR0FBR0csT0FBTzs7Ozs7d0JBQUk7Ozs7O29CQUN4Qjs7Ozs7O1lBQ0EsQ0FDTjtDQUNIO0FBQ00sTUFBTVEsY0FBYyxHQUFHLFVBQVk7SUFDeEMsTUFBTUMsS0FBSyxHQUFHLE1BQU1mLDZEQUFRLEVBQUU7SUFDOUIsTUFBTWdCLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLLENBQUM7WUFBRUMsTUFBTSxFQUFFO2dCQUFFQyxJQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFBSTthQUFFO1NBQUUsQ0FBQyxDQUFDO0lBQ3BFLE9BQU87UUFDTEosS0FBSztRQUNMSyxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUVLLE1BQU1DLGNBQWMsR0FBRyxPQUFPLEVBQUVILE1BQU0sR0FBRSxHQUFLO0lBQ2xELE1BQU1ELElBQUksR0FBRyxNQUFNakIsNERBQU8sQ0FBQ2tCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQ3ZDLE1BQU1HLFNBQVMsR0FBRyxNQUFNckIsb0VBQVMsQ0FBQ2dCLElBQUksQ0FBQ1osT0FBTyxDQUFDO0lBQy9DLE9BQU87UUFDTGtCLEtBQUssRUFBRTtZQUNMbkIsSUFBSSxFQUFFYSxJQUFJLENBQUNiLElBQUk7WUFDZkMsT0FBTyxFQUFFaUIsU0FBUztTQUNuQjtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YXRlbnNvci1hcHAvLi9wYWdlcy9bc2x1Z10uanM/NmMxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGluZyBEeW5hbWljIFJvdXRlIGZvciB0aGUgcG9zdHMgYXMgYW4gYXJyYXkgdG8gY3JlYXRlIGxpbmtzIGJldHdlZW4gdGhlIGJsb2cgcGFnZSBhbmQgcG9zdC5cbmltcG9ydCBnZXRQb3N0cyBmcm9tIFwiLi4vaGVscGVycy9nZXRwb3N0c1wiO1xuaW1wb3J0IGdldFBvc3QgZnJvbSBcIi4uL2hlbHBlcnMvZ2V0cG9zdFwiO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZS9zZXJpYWxpemVcIjtcbmltcG9ydCB7IE1EWFJlbW90ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGVcIjsgLy8gVXNlZCB3aXRoIFNlcmxpemF0aW9uIHRvIGdldCBjbGVhbiBjb250ZW50IGZyb20gbWR4IGZpbGVzIGFuZCBjb3VsZCBiZSBwdXQgaW4gY29tcG9uZW50IHRvIHN0eWxlIHRoZW0uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBkYXRhLCBjb250ZW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTd4bCBtdC0yNCBtYi0xMlwiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICA8dGltZSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiPntkYXRhLmRhdGV9PC90aW1lPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvc2UgbXQtMTJcIj5cbiAgICAgICAgPE1EWFJlbW90ZSB7Li4uY29udGVudH0gLz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpO1xuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gKHsgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1ZyB9IH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdChwYXJhbXMuc2x1Zyk7XG4gIGNvbnN0IG1keFNvdXJjZSA9IGF3YWl0IHNlcmlhbGl6ZShwb3N0LmNvbnRlbnQpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBwb3N0LmRhdGEsXG4gICAgICBjb250ZW50OiBtZHhTb3VyY2UsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0UG9zdHMiLCJnZXRQb3N0Iiwic2VyaWFsaXplIiwiTURYUmVtb3RlIiwiUG9zdCIsImRhdGEiLCJjb250ZW50IiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInRpbWUiLCJkYXRlIiwicCIsImdldFN0YXRpY1BhdGhzIiwicG9zdHMiLCJwYXRocyIsIm1hcCIsInBvc3QiLCJwYXJhbXMiLCJzbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIm1keFNvdXJjZSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
var __webpack_exports__ = (__webpack_exec__("./pages/[slug].js"));
module.exports = __webpack_exports__;

})();