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

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.panel;

/**
 * Panel component
 * @extends {PureComponent }
 * @class
 */

var Panel = function (_PureComponent) {
  _inherits(Panel, _PureComponent);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * defaultProps
     * @property {Boolean} scroll
     * @property {String} header
     * @property {String} footer
     * @property {String} footerAddon
     * @property {Node} children
     */
    value: function render() {
      var _props = this.props,
          children = _props.children,
          scroll = _props.scroll,
          header = _props.header,
          footer = _props.footer,
          footerAddon = _props.footerAddon,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['children', 'scroll', 'header', 'footer', 'footerAddon', 'className']);

      var fullClassName = (0, _classnames2.default)(className, styles.panel);

      if (!children) {
        return null;
      }

      return _react2.default.createElement(
        'section',
        { className: fullClassName },
        header && _react2.default.createElement(
          'header',
          { className: styles['panel-header'] },
          _react2.default.createElement(
            'h3',
            null,
            header
          )
        ),
        children && _react2.default.createElement(
          'div',
          _extends({ className: (0, _classnames2.default)(styles['panel-content'], _defineProperty({}, styles['panel-content--scroll'], scroll))
          }, elementProps),
          children
        ),
        footer && _react2.default.createElement(
          'footer',
          { className: styles['panel-footer'] },
          _react2.default.createElement(
            'span',
            { className: styles['panel-footer-info'] },
            footer
          ),
          _react2.default.createElement(
            'span',
            { className: styles['panel-footer-addon'] },
            footerAddon
          )
        )
      );
    }

    /**
     * propTypes
     * @property {Boolean} scroll
     * @property {String} header
     * @property {String} footer
     * @property {String} footerAddon
     * @property {Node} children
     */

  }]);

  return Panel;
}(_react.PureComponent);

/**
 * @example <Panel />
 */


Panel.defaultProps = {
  scroll: false,
  header: undefined,
  footer: undefined,
  footerAddon: undefined,
  children: undefined
};
Panel.propTypes = {
  scroll: _propTypes2.default.bool,
  header: _propTypes2.default.string,
  footer: _propTypes2.default.string,
  footerAddon: _propTypes2.default.string,
  children: _propTypes2.default.node
};
exports.default = (0, _reactCssModules2.default)(Panel, styles);