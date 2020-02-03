import React from 'react';

const CustomInput = ({ name, type, value, handleChange }) => {
  return (
    <div className="group">
      <input
        name={name}
        onChange={handleChange}
        value={value}
        required
        type={type}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{name.toUpperCase()}</label>
    </div>
  );
};

export default CustomInput;
