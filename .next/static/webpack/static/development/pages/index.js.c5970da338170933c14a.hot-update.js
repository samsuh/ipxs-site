webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\Samuel Suh\\Desktop\\ipxs-site\\components\\Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var Form =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Form, _React$Component);

  function Form(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Form).call(this, props));
    _this.state = {
      emailValue: '',
      fNameValue: '',
      pNameValue: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("form", {
        action: "https://gmail.us20.list-manage.com/subscribe/post",
        method: "POST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("input", {
        type: "hidden",
        name: "u",
        value: "d3d3bb204705bc189b8f60f9e",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), __jsx("input", {
        type: "hidden",
        name: "id",
        value: "da4a6bf8e6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "mce-FULLNAME",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Full name", __jsx("input", {
        type: "text",
        name: "FULLNAME",
        id: "mce-FULLNAME",
        value: this.state.fNameValue,
        onChange: function onChange(e) {
          _this2.setState({
            fNameValue: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), __jsx("label", {
        htmlFor: "mce-EMAIL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Email", __jsx("input", {
        type: "email",
        name: "EMAIL",
        id: "mce-EMAIL",
        value: this.state.emailValue,
        onChange: function onChange(e) {
          _this2.setState({
            emailValue: e.target.value
          });
        },
        autoCapitalize: "off",
        autoCorrect: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), __jsx("label", {
        htmlFor: "mce-PROJECT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Project name", __jsx("input", {
        type: "text",
        name: "PROJECT",
        id: "mce-PROJECT",
        value: this.state.pNameValue,
        onChange: function onChange(e) {
          _this2.setState({
            pNameValue: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), __jsx("input", {
        type: "submit",
        value: "Subscribe",
        name: "subscribe",
        id: "mc-embedded-subscribe",
        className: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("div", {
        style: {
          position: 'absolute',
          left: '-5000px'
        },
        "aria-hidden": "true",
        "aria-label": "Please leave the following three fields empty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "b_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Name: "), __jsx("input", {
        type: "text",
        name: "b_d3d3bb204705bc189b8f60f9e_da4a6bf8e6",
        tabIndex: "-1",
        value: "",
        placeholder: "Sam",
        id: "b_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "b_email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Email: "), __jsx("input", {
        type: "email",
        name: "b_email",
        tabIndex: "-1",
        value: "",
        placeholder: "youremail@gmail.com",
        id: "b_email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "b_comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Comment: "), __jsx("textarea", {
        name: "b_comment",
        tabIndex: "-1",
        placeholder: "Please comment",
        id: "b_comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.c5970da338170933c14a.hot-update.js.map