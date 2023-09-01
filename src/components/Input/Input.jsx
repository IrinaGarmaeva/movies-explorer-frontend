import React from "react";

const Input = ({ value, name, type, className, onChange }) => {
  return (
    <input
      value={value}
      name={name}
      type={type}
      className={className}
      onChange={onChange}
      required
    />
  );
};

export default Input;
