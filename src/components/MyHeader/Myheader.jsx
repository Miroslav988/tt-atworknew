import React from "react";
import cl from "./MyHeader.module.css";
const Myheader = () => {
  return (
    <header>
      <div className={cl.headerContainer}>
        <div href={"#"} className={cl.logo}></div>
        <div className={cl.userContainer}>
          <button className={cl.btn + " " + cl.like}></button>
          <button className={cl.btn + " " + cl.notif}></button>
          <div className={cl.userPhoto}></div>
          <span className={`${cl.userName} t2M`}>Бакаев Мирослав</span>
        </div>
      </div>
    </header>
  );
};

export default Myheader;
