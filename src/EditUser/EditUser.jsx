import React from "react";
import UserToEdit from "../components/UserToEdit/UserToEdit";
import Myheader from "../components/MyHeader/Myheader";
import "../App.css";
import EditForm from "../components/EditForm/EditForm";
import cl from "./EditUser.module.css";
import { useLocation, useNavigate } from "react-router-dom";
const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state;
  const backToMain = () => {
    navigate("/");
  };
  return (
    <div className="App">
      <Myheader />
      <button className={cl.backBtn} onClick={backToMain}>
        <div className={cl.backIcon}></div>
        <span className="headline">Назад</span>
      </button>
      <div className={cl.editContainer}>
        <UserToEdit
          url={
            "https://20.img.avito.st/image/1/1.ryjkQ7a5A8HS6sHEtlWDFiLgBctQYAsDVeABxVjqCcM.ZneBo-WZvM3ycwB_dD7Pu6v1wJ0wmgCgZaDSqAaKObw"
          }
        />
        <div className={cl.editFormContainer}>
          <EditForm data={user} />
        </div>
      </div>
    </div>
  );
};

export default EditUser;
