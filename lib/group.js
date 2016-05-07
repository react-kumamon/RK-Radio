'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getCheckedValue(children) {
  var value = null;
  var matched = false;
  _react2.default.Children.forEach(children, function (radio) {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? {
    value: value
  } : undefined;
}

var RKGroup = function (_Component) {
  _inherits(RKGroup, _Component);

  function RKGroup(props) {
    _classCallCheck(this, RKGroup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RKGroup).call(this, props));

    var value = undefined;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      var checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }
    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass(RKGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      } else {
        var checkedValue = getCheckedValue(nextProps.children);
        if (checkedValue) {
          this.setState({
            value: checkedValue.value
          });
        }
      }
    }
  }, {
    key: 'onRadioChange',
    value: function onRadioChange(ev) {
      if (!('value' in this.props)) {
        this.setState({
          value: ev.target.value
        });
      }
      this.props.onChange(ev);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var children = _react2.default.Children.map(props.children, function (radio) {
        if (radio && radio.type === _radio2.default && radio.props) {
          var keyProps = {};
          if (!('key' in radio) && typeof radio.props.value === 'string') {
            keyProps.key = radio.props.value;
          }

          return _react2.default.cloneElement(radio, _extends({}, keyProps, radio.props, {
            onChange: _this2.onRadioChange.bind(_this2),
            checked: _this2.state.value === radio.props.value,
            disabled: radio.props.disabled || _this2.props.disabled
          }));
        }
        return radio;
      });
      var classString = (0, _classnames2.default)(_defineProperty({}, props.prefixCls, true));
      return _react2.default.createElement(
        'div',
        { className: classString, style: props.style },
        children
      );
    }
  }]);

  return RKGroup;
}(_react.Component);

RKGroup.defaultProps = {
  prefixCls: 'rk-radio-group',
  disabled: false,
  onChange: function onChange() {}
};
RKGroup.propTypes = {
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  children: _react.PropTypes.arrayOf(_react2.default.PropTypes.element).isRequired,
  prefixCls: _react.PropTypes.string,
  disabled: _react.PropTypes.bool
};
exports.default = RKGroup;