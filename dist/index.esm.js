import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import PropTypes from 'prop-types';
import React, { useState, createContext, useContext } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { customAlphabet } from 'nanoid/non-secure';

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

  return css(["color:", ";background-color:", ";border-color:", ";&:focus-visible{border-color:", ";box-shadow:0 0 0 0.2rem ", ";}"], color, backgroundColor, backgroundColor, color, transparentize(0.45, backgroundColor));
};

var StyledButton = styled.button.withConfig({
  displayName: "styles__StyledButton",
  componentId: "sc-m3kk1m-0"
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
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      variant = _ref.variant,
      size = _ref.size,
      isFullWidth = _ref.isFullWidth,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    ref: ref,
    type: "button",
    variant: variant,
    size: size,
    isFullWidth: isFullWidth
  }, props), children);
});
Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool
};
Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false
};
Button.displayName = 'Button';

var nanoid = customAlphabet('1234567890abcdef', 10);
var useUniqueID = function useUniqueID() {
  var _useState = useState(nanoid()),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  return id;
};

var FieldContext = /*#__PURE__*/createContext(undefined);

var StyledLabel = styled.label.withConfig({
  displayName: "styles__StyledLabel",
  componentId: "sc-kqq05e-0"
})(["font-weight:500;margin-bottom:0.4rem;"]);
var StyledInput = styled.input.withConfig({
  displayName: "styles__StyledInput",
  componentId: "sc-kqq05e-1"
})(["display:block;width:100%;padding:0.5rem 0.4rem;font-size:1rem;line-height:1.5;color:", ";background-color:transparent;border:1px solid ", ";appearance:none;border-radius:0;transition:all 0.15s ease-in-out;&:focus{outline:none;border-color:", ";box-shadow:0 0 0 0.2rem ", ";}&:disabled{background-color:", ";opacity:", ";}"], SECONDARY_TEXT_COLOR, SECONDARY_COLOR, PRIMARY_COLOR, transparentize(0.75, PRIMARY_COLOR), SECONDARY_COLOR, DISABLED_OPACITY);
var StyledTextarea = styled(StyledInput).attrs({
  as: 'textarea'
}).withConfig({
  displayName: "styles__StyledTextarea",
  componentId: "sc-kqq05e-2"
})(["resize:", ";"], function (props) {
  return !props.isResizable && 'none';
});

var Label = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = useContext(FieldContext);
  return /*#__PURE__*/React.createElement(StyledLabel, _extends({
    ref: ref,
    htmlFor: id
  }, props));
});
Label.displayName = 'Field.Label';

var Input = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var id = useContext(FieldContext);
  return /*#__PURE__*/React.createElement(StyledInput, _extends({
    ref: ref,
    id: id
  }, props));
});
Input.displayName = 'Field.Input';

var _excluded = ["isResizable"];
var Textarea = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var isResizable = _ref.isResizable,
      props = _objectWithoutProperties(_ref, _excluded);

  var id = useContext(FieldContext);
  return /*#__PURE__*/React.createElement(StyledTextarea, _extends({
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
  isResizable: PropTypes.bool
};

var Field = function Field(_ref) {
  var children = _ref.children;
  var id = useUniqueID();
  return /*#__PURE__*/React.createElement(FieldContext.Provider, {
    value: id
  }, children);
};
Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;

export { Button, Field };
