import React from "react";
import "./TextField.scss";

const TextField = ({ type = "text", label, value, onChange }) => (
    <input
      type={type}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
);

export default TextField;