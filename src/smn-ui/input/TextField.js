import React from "react";

const TextField = ({ type = "text", label, value, onChange }) => (
    <input
      type={type}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
);

export default TextField;