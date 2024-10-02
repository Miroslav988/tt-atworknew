import React from "react";
import cl from "./PopUp.module.css";
const PopUp = ({ onClose }) => {
  return (
    <div className={cl.back}>
      <div className={cl.popUpCont}>
        <button className={cl.closeIcon} onClick={onClose}></button>
        <div className={cl.icon}></div>
        <p className={`${cl.text} headline`}>Изменения сохранены!</p>
      </div>
    </div>
  );
};

export default PopUp;
