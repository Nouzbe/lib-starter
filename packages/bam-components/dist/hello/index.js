"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = function Hello(_ref) {
  var name = _ref.name;
  return _react2.default.createElement(
    "div",
    null,
    "Hello ",
    name
  );
};

exports.default = Hello;