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
      fullName: 'Name',
      projectName: 'Project Name',
      email: 'Email Address'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState({
        fullName: value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      console.log("It Works");
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("p", {
        className: "h4 text-center py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Decentralize Now"), __jsx("div", {
        className: "md-form ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        name: "fullName",
        className: "form-control",
        value: this.state.fullName,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx("i", {
        className: "material-icons mr-2 align-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "account_box"), __jsx("label", {
        className: "font-weight-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, " Your name")), __jsx("div", {
        className: "md-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        name: "projectName",
        className: "form-control",
        value: this.state.projectName,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("i", {
        className: "material-icons mr-2 align-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "business"), __jsx("label", {
        className: "font-weight-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, " Your project")), __jsx("div", {
        className: "md-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("input", {
        type: "email",
        name: "email",
        className: "form-control",
        value: this.state.email,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("i", {
        className: "material-icons mr-2 align-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "email"), __jsx("label", {
        className: "font-weight-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, " Your email")), __jsx("div", {
        className: "text-center pb-4 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("button", {
        className: "btn btn-primary",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Stay Updated"), __jsx("small", {
        name: "emailHelp",
        className: "form-text text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "We'll never share your email."))));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.6cf9fa13e335054db50e.hot-update.js.map