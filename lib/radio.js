'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rcRadio = require('rc-radio');

var _rcRadio2 = _interopRequireDefault(_rcRadio);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RKRadio = function (_Component) {
  _inherits(RKRadio, _Component);

  function RKRadio() {
    _classCallCheck(this, RKRadio);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RKRadio).apply(this, arguments));
  }

  _createClass(RKRadio, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var prefixCls = _props.prefixCls;
      var children = _props.children;
      var checked = _props.checked;
      var disabled = _props.disabled;
      var className = _props.className;
      var style = _props.style;

      var classString = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _defineProperty(_classNames, className, !!className), _classNames));
      return _react2.default.createElement(
        'label',
        { className: classString, style: style },
        _react2.default.createElement(_rcRadio2.default, _extends({}, this.props, { style: null, children: null })),
        _react2.default.createElement(
          'span',
          null,
          children
        )
      );
    }
  }]);

  return RKRadio;
}(_react.Component);

RKRadio.defaultProps = {
  prefixCls: 'rk-radio'
};
RKRadio.propTypes = {
  prefixCls: _react.PropTypes.string,
  children: _react.PropTypes.string,
  value: _react.PropTypes.string.isRequired,
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object
};
exports.default = RKRadio;