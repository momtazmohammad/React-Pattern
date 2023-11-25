import React, {  useState } from "react";
import "./index.css";
import FormField from "./FormField";
import { validationCheck } from "./validationCheck";

export default function PersonForm({ person,onChange,onSubmit,onClose }) {
  
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });
  const vldCheck={
    firstname:[value=>!value?"لطفا فیلد مربوطه تکمیل گردد":"",value=>value.length<10?"طول فيلد بايد بزگتر از 10 حرف باشد":""],
    lastname:[value=>!value?"لطفا فیلد مربوطه تکمیل گردد":""],
    age:[value=>value<20?"سن بايد بزرگتر از 19 سال باشد":""]
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationCheck(errors, setErrors,vldCheck,person)) {
      onSubmit();
    }
  };
  return (
    <div style={{ padding: "10px", margin: "10px auto", maxWidth: "70vw" }}>
      <div>
      <span className="closebtn" onClick={onClose}>
          &times;
        </span>
      <h2>Person Responsive Form</h2>
        </div>
      <div className="formcontainer">
        <form onSubmit={handleSubmit}>
          <FormField label="First Name" value={person.firstname} fieldName="firstname" onChange={onChange} error={errors.firstname}/>
          <FormField label="Last Name" value={person.lastname} fieldName="lastname" onChange={onChange} error={errors.lastname}/>          
          <div className="form-row">
            <div className="form-col-25">
              <label >age</label>
              
            </div>
            <div className="form-col-75">
              <input
                value={person?.age}
                type="number"
                name="age"
                placeholder="Your age"
                onChange={({ target }) => onChange({ age: target.value })}
              />
              {errors.age && (
                <span style={{ color: "red" }}> {errors.age}</span>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-col-25">
              <label >country</label>
            </div>
            <div className="form-col-75">
              <select style={{padding:"10px"}}
                value={person?.country}
                name="country"
                onChange={({ target }) =>
                  onChange({ country: target.value })
                }
              >
                <option value="iran">iran</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <input type="submit" value="ذخيره" />
          </div>
        </form>
      </div>
    </div>
  );
}
