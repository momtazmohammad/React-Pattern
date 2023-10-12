import React from "react";

const Select = ({ options, name,lable, handleChange, ...others }) => {
  return (
    <div {...others}>
           <div className="form-row">
            <div className="form-col-25">
              <label htmlFor={name}>{lable}</label>
            </div>
            <div className="form-col-75">
      <select        
        name={name}
        onChange={({ target }) => handleChange(target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      </div>
      </div>
    </div>
  );
};

export default Select;