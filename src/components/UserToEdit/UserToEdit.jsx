import React from "react";
import cl from "./UserToEdit.module.css";
const UserToEdit = ({ url }) => {
  return (
    <div className={cl.container}>
      <div
        className={cl.profilePicture}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className={cl.categories}>
        <p className={`${cl.category} t2S`} style={{ color: "#161616" }}>
          Данные профиля
        </p>
        <p className={`${cl.category} t2S`}>Рабочее пространство</p>
        <p className={`${cl.category} t2S`}>Приватность</p>
        <p className={`${cl.category} t2S`}>Безопастность</p>
      </div>
    </div>
  );
};

export default UserToEdit;
