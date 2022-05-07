exports.id = 6189;
exports.ids = [6189];
exports.modules = {
  /***/ 6189: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: function () {
        return /* binding */ Label;
      },
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5282);
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(9297);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

    const bgColors = {
      blueGray: "bg-blue-gray-100",
      gray: "bg-gray-100",
      brown: "bg-brown-100",
      deepOrange: "bg-deep-orange-100",
      orange: "bg-orange-100",
      amber: "bg-amber-100",
      yellow: "bg-yellow-100",
      lime: "bg-lime-100",
      lightGreen: "bg-light-green-100",
      green: "bg-green-100",
      teal: "bg-teal-100",
      cyan: "bg-cyan-100",
      lightBlue: "bg-light-blue-100",
      blue: "bg-blue-100",
      indigo: "bg-indigo-100",
      deepPurple: "bg-deep-purple-100",
      purple: "bg-purple-100",
      pink: "bg-pink-100",
      red: "bg-red-100",
    };
    const textColors = {
      blueGray: "text-blue-gray-700",
      gray: "text-gray-700",
      brown: "text-brown-700",
      deepOrange: "text-deep-orange-700",
      orange: "text-orange-700",
      amber: "text-amber-700",
      yellow: "text-yellow-700",
      lime: "text-lime-700",
      lightGreen: "text-light-green-700",
      green: "text-green-700",
      teal: "text-teal-700",
      cyan: "text-cyan-700",
      lightBlue: "text-light-blue-700",
      blue: "text-blue-700",
      indigo: "text-indigo-700",
      deepPurple: "text-deep-purple-700",
      purple: "text-purple-700",
      pink: "text-pink-700",
      red: "text-red-700",
    };
    function Label({ children, color, className }) {
      return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        {
          children:
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              "div",
              {
                className: `max-w-max flex items-center justify-between py-1 px-3 rounded-full ${bgColors[color]} last:mr-0 mr-1 transition-all duration-300 ${className}`,
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    "span",
                    {
                      className: `text-xs font-semibold uppercase ${textColors[color]}`,
                      children: children,
                    }
                  ),
              }
            ),
        }
      );
    }

    /***/
  },
};