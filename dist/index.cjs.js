'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var PropTypes = require('prop-types');
var React = require('react');
var styled = require('styled-components');
var polished = require('polished');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var nonSecure = require('nanoid/non-secure');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var SECONDARY_COLOR = '#ced4da';
var SECONDARY_TEXT_COLOR = '#000';
var PRIMARY_COLOR = '#0a58ca';
var PRIMARY_TEXT_COLOR = '#fff';
var DANGER_COLOR = '#dc3545';
var DANGER_TEXT_COLOR = '#fff';
var DISABLED_OPACITY = 0.65;

var colorStyles = function colorStyles(p) {
  var color = SECONDARY_TEXT_COLOR,
      backgroundColor = SECONDARY_COLOR;

  if (p.variant === 'primary') {
    color = PRIMARY_TEXT_COLOR;
    backgroundColor = PRIMARY_COLOR;
  } else if (p.variant === 'danger') {
    color = DANGER_TEXT_COLOR;
    backgroundColor = DANGER_COLOR;
  }

  return styled.css(["color:", ";background-color:", ";border-color:", ";&:focus-visible{border-color:", ";box-shadow:0 0 0 0.2rem ", ";}"], color, backgroundColor, backgroundColor, color, polished.transparentize(0.45, backgroundColor));
};

var StyledButton = styled__default['default'].button.withConfig({
  displayName: "styles__StyledButton",
  componentId: "sc-1s7qdnz-0"
})(["cursor:pointer;font-weight:400;text-align:center;vertical-align:middle;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:0;transition:all 0.15s ease-in-out;display:", ";width:", ";padding:", ";font-size:", ";&:focus{outline:0;}&:disabled{cursor:inherit;opacity:", ";}", ""], function (p) {
  return p.isFullWidth ? 'block' : 'inline-block';
}, function (p) {
  return p.isFullWidth && '100%';
}, function (p) {
  if (p.size === 'large') {
    return '0.5rem 1rem';
  } else if (p.size === 'small') {
    return '0.25rem 0.5rem';
  }

  return '0.4rem 0.75rem';
}, function (p) {
  if (p.size === 'large') {
    return '1.25rem';
  } else if (p.size === 'small') {
    return '0.875rem';
  }

  return '1rem';
}, DISABLED_OPACITY, colorStyles);

var _excluded$1 = ["children", "variant", "size", "isFullWidth"];
var Button = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      variant = _ref.variant,
      size = _ref.size,
      isFullWidth = _ref.isFullWidth,
      props = _objectWithoutProperties__default['default'](_ref, _excluded$1);

  return /*#__PURE__*/React__default['default'].createElement(StyledButton, _extends__default['default']({
    ref: ref,
    type: "button",
    variant: variant,
    size: size,
    isFullWidth: isFullWidth
  }, props), children);
});
Button.propTypes = {
  variant: PropTypes__default['default'].oneOf(['secondary', 'primary', 'danger']),
  size: PropTypes__default['default'].oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes__default['default'].bool
};
Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false
};

var nanoid = nonSecure.customAlphabet('1234567890abcdef', 10);
var useUniqueID = function useUniqueID() {
  var _useState = React.useState(nanoid()),
      _useState2 = _slicedToArray__default['default'](_useState, 1),
      id = _useState2[0];

  return id;
};

var FieldContext = /*#__PURE__*/React.createContext(undefined);

var StyledLabel = styled__default['default'].label.withConfig({
  displayName: "styles__StyledLabel",
  componentId: "sc-8awnhv-0"
})(["font-weight:500;margin-bottom:0.4rem;"]);
var StyledInput = styled__default['default'].input.withConfig({
  displayName: "styles__StyledInput",
  componentId: "sc-8awnhv-1"
})(["display:block;width:100%;padding:0.5rem 0.4rem;font-size:1rem;line-height:1.5;color:", ";background-color:transparent;border:1px solid ", ";appearance:none;border-radius:0;transition:all 0.15s ease-in-out;&:focus{outline:none;border-color:", ";box-shadow:0 0 0 0.2rem ", ";}&:disabled{background-color:", ";opacity:", ";}"], SECONDARY_TEXT_COLOR, SECONDARY_COLOR, PRIMARY_COLOR, polished.transparentize(0.75, PRIMARY_COLOR), SECONDARY_COLOR, DISABLED_OPACITY);
var StyledTextarea = styled__default['default'](StyledInput).attrs({
  as: 'textarea'
}).withConfig({
  displayName: "styles__StyledTextarea",
  componentId: "sc-8awnhv-2"
})(["resize:", ";"], function (props) {
  return !props.isResizable && 'none';
});

var Label = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var id = React.useContext(FieldContext);
  return /*#__PURE__*/React__default['default'].createElement(StyledLabel, _extends__default['default']({
    ref: ref,
    htmlFor: id
  }, props));
});
Label.displayName = 'Field.Label';

var Input = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var id = React.useContext(FieldContext);
  return /*#__PURE__*/React__default['default'].createElement(StyledInput, _extends__default['default']({
    ref: ref,
    id: id
  }, props));
});
Input.displayName = 'Field.Input';

var _excluded = ["isResizable"];
var Textarea = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var isResizable = _ref.isResizable,
      props = _objectWithoutProperties__default['default'](_ref, _excluded);

  var id = React.useContext(FieldContext);
  return /*#__PURE__*/React__default['default'].createElement(StyledTextarea, _extends__default['default']({
    ref: ref,
    id: id,
    isResizable: isResizable
  }, props));
});
Textarea.displayName = 'Field.Textarea';
Textarea.defaultProps = {
  isResizable: true
};
Textarea.propTypes = {
  isResizable: PropTypes__default['default'].bool
};

var Field = function Field(_ref) {
  var children = _ref.children;
  var id = useUniqueID();
  return /*#__PURE__*/React__default['default'].createElement(FieldContext.Provider, {
    value: id
  }, children);
};
Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;

exports.Button = Button;
exports.Field = Field;
