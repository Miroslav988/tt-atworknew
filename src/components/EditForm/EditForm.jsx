import React from "react";
import MyInput from "../UI/MyInput/MyInput";

const EditForm = ({ data }) => {
  return (
    <form>
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
      <button>Сохранить</button>
    </form>
  );
};

export default EditForm;
