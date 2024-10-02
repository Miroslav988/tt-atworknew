import React from "react";
import MyInput from "../UI/MyInput/MyInput";
import cl from "./EditForm.module.css";
const EditForm = ({ data }) => {
  return (
    <form className={cl.formContainer}>
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
    </form>
  );
};

export default EditForm;
