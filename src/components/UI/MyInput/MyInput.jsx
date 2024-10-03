import React from "react";
import cl from "./MyInput.module.css";
const MyInput = ({ label, type, data, onChange, name }) => {
  return (
    <div className={cl.inputForm}>
      <label className={`${cl.label} t1S`}>{label}</label>
      <input
        required={true}
        type={type}
        defaultValue={data}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default MyInput;
