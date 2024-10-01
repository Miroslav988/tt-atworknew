import React from "react";
import cl from "./MyInput.module.css";
const MyInput = ({ label, type, data }) => {
  return (
    <div className={cl.inputForm}>
      <label>{label}</label>
      <input type={type} value={data} />
    </div>
  );
};

export default MyInput;
