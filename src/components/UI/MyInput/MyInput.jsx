import React from "react";
import cl from "./MyInput.module.css";
const MyInput = ({ label, type, data }) => {
  return (
    <div className={cl.inputForm}>
      <label className={`${cl.label} t1S`}>{label}</label>
      <input type={type} defaultValue={data} />
    </div>
  );
};

export default MyInput;
