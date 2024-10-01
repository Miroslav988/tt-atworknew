import React, { useState } from "react";
import cl from "./UserCard.module.css";
import "../../../App.css";
import MyEditBtn from "../MyEditBtn/MyEditBtn";
const UserCard = ({
  url,
  userName,
  companyName,
  city,
  isActive,
  onToggleActive,
  onDeleteCard,
  user,
}) => {
  return (
    <div className={cl.userCard}>
      <MyEditBtn
        isActive={isActive}
        onToggleActive={onToggleActive}
        onDeleteCard={() => onDeleteCard(user)}
      />
      <div
        className={cl.userPhoto}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className={cl.infoContainer}>
        <h1 className={`${cl.userName} title`}>{userName}</h1>
        <h3 className={`${cl.companyName} t2M`}>{companyName}</h3>
        <p className={`${cl.city} caption`}>{city}</p>
      </div>
    </div>
  );
};

export default UserCard;
