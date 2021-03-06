'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

//styles


var styles = _interface2.default.styles.formControl;

/**
 * Form Control component
 * @extends {PureComponent }
 * @class
 */

var FormControl = function (_PureComponent) {
  _inherits(FormControl, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function FormControl(props, context) {
    _classCallCheck(this, FormControl);

    var _this = _possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call(this, props, context));

    _this.type = _this.props.type;
    _this.hasTypeProperty = _this.type !== 'select' && _this.type !== 'textarea';

    _this.componentRender = _this.componentRender.bind(_this);
    return _this;
  }

  /**
   * Default props values
   * @property {Function} onChange
   * @property {Function} onFocus
   * @property {Function} onBlur
   * @property {Node} addonBefore
   * @property {Node} addonAfter
   * @property {Boolean} feedback
   * @property {String} type
   */


  /**
   * propTypes
   * @property {Function} getRef
   * @property {Function} onChange
   * @property {Function} onFocus
   * @property {Function} onBlur
   * @property {Node} addonBefore
   * @property {Node} addonAfter
   * @property {Boolean} feedback
   * @property {String} type
   */


  /**
   * contextTypes
   * @property {Object} $formGroup
   */


  _createClass(FormControl, [{
    key: 'componentRender',


    /**
     * Generate component
     */
    value: function componentRender(controlId, type) {
      var _classNames;

      var Component = this.hasTypeProperty ? 'input' : type;

      var _props = this.props,
          getRef = _props.getRef,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          disabled = _props.disabled,
          children = _props.children,
          name = _props.name,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['getRef', 'onChange', 'onFocus', 'onBlur', 'disabled', 'children', 'name', 'value']);

      var isClassDefault = ['radio', 'checkbox', 'textarea', 'select'].indexOf(type) < 0;
      var componentClass = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, styles['form-field'], isClassDefault), _defineProperty(_classNames, styles['form-field--radio'], type === 'radio'), _defineProperty(_classNames, styles['form-field--checkbox'], type === 'checkbox'), _defineProperty(_classNames, styles['form-field--textarea'], type === 'textarea'), _defineProperty(_classNames, styles['form-field--select'], type === 'select'), _classNames));
      var tagType = void 0;
      // Has type property
      if (this.hasTypeProperty) {
        tagType = type;
      }

      return _react2.default.createElement(
        Component,
        _extends({}, rest, {
          type: tagType,
          ref: getRef,
          className: componentClass,
          id: controlId,
          onChange: onChange,
          onFocus: onFocus,
          onBlur: onBlur,
          disabled: disabled,
          name: name,
          value: value
        }),
        children
      );
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          type = _props2.type,
          addonBefore = _props2.addonBefore,
          addonAfter = _props2.addonAfter,
          feedback = _props2.feedback,
          className = _props2.className;
      // context

      var formGroup = this.context.$formGroup;
      var controlId = formGroup && formGroup.controlId || undefined;
      var validationState = formGroup && formGroup.validationState;
      // classes
      var addonClass = (0, _classnames2.default)(className, styles['form-addon'], _defineProperty({}, styles['form-addon--withItens'], addonBefore || addonAfter || feedback));
      // internal components
      var generateAddonBefore = FormControl.addonRender('before', addonBefore);
      var generateAddonAfter = FormControl.addonRender('after', addonAfter);
      var generateFeedback = FormControl.feedbackRender(validationState, feedback, addonAfter);
      // component
      var generateComponent = this.componentRender(controlId, type);

      return _react2.default.createElement(
        'div',
        { className: addonClass },
        generateAddonBefore,
        generateComponent,
        generateAddonAfter,
        generateFeedback
      );
    }
  }], [{
    key: 'addonRender',


    /**
     * Generate Addon
     */
    value: function addonRender(type, children) {
      if (!type || !children) {
        return null;
      }

      return _react2.default.createElement(
        'span',
        { className: styles['form-addon-' + type] },
        children
      );
    }

    /**
     * Generate Feedback
     */

  }, {
    key: 'feedbackRender',
    value: function feedbackRender(validationState, feedback, addonAfter) {
      if (!validationState && !feedback && addonAfter || !feedback || !validationState) {
        return null;
      }

      var iconName = void 0;

      switch (validationState) {
        case 'success':
          iconName = 'check';
          break;
        case 'warning':
          iconName = 'warning';
          break;
        case 'error':
          iconName = 'close';
          break;
      }

      return _react2.default.createElement(
        'span',
        { className: styles['form-feedback'] },
        _react2.default.createElement(_icon2.default, { name: iconName })
      );
    }
  }]);

  return FormControl;
}(_react.PureComponent);

/**
 * @example <FormControl />
 */


FormControl.defaultProps = {
  disabled: false,
  addonBefore: false,
  addonAfter: false,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  feedback: false,
  type: 'text'
};
FormControl.propTypes = {
  getRef: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  addonAfter: _propTypes2.default.node,
  addonBefore: _propTypes2.default.node,
  feedback: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['text', 'password', 'select', 'textarea', 'radio', 'checkbox', 'file', 'hidden', 'search', 'email', 'range', 'number', 'month', 'tel', 'time', 'url', 'week', 'date', 'datetime', 'color'])
};
FormControl.contextTypes = {
  $formGroup: _propTypes2.default.object
};
exports.default = (0, _reactCssModules2.default)(FormControl, styles);