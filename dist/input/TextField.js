import React from "react";

var TextField = function TextField(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      label = _ref.label,
      value = _ref.value,
      _onChange = _ref.onChange;
  return React.createElement("input", {
    type: type,
    value: value,
    onChange: function onChange(e) {
      return _onChange && _onChange(e.target.value);
    }
  });
};

export default TextField;