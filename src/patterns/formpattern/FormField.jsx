import React from 'react'

export default function FormField({label,value,fieldName,onChange,error}) {
  return (
    <div className="form-row">
    <div className="form-col-25">
      <label >{label}</label>
    </div>
    <div className="form-col-75">
      <input
        value={value || ""}
        type="text"
        name={fieldName}
        placeholder={`${label}...`}
        onChange={({ target }) =>
          onChange({ [fieldName]: target.value })
        }
      />
      {error && (
        <span style={{ color: "red" }}> {error}</span>
      )}
    </div>
  </div>
)
}
