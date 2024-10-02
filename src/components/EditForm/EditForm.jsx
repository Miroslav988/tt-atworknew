import React, { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import cl from "./EditForm.module.css";
import PopUp from "../UI/PopUp/PopUp";
const EditForm = ({ data }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [timer, setTimer] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopUp(true);
    setTimer(setTimeout(() => setShowPopUp(false), 4000));
  };
  const handleClosePopUp = () => {
    setShowPopUp(false);
    clearTimeout(timer);
  };
  return (
    <form className={cl.formContainer} onSubmit={handleSubmit}>
      <h1 className={`title ${cl.caption}`}>Данные профиля</h1>
      <MyInput label={"Имя"} type={"text"} data={data.name} />
      <MyInput label={"Никнейм"} type={"text"} data={data.username} />
      <MyInput label={"Почта"} type={"mail"} data={data.email} />
      <MyInput label={"Город"} type={"text"} data={data.address.city} />
      <MyInput label={"Телефон"} type={"phone"} data={data.phone} />
      <MyInput
        label={"Название компании"}
        type={"text"}
        data={data.company.name}
      />
      <button className={`${cl.btn} t2S`}>Сохранить</button>
      {showPopUp && <PopUp onClose={handleClosePopUp} />}
    </form>
  );
};

export default EditForm;
