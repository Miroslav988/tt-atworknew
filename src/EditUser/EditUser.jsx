import React from "react";
import UserToEdit from "../components/UserToEdit/UserToEdit";
import Myheader from "../components/MyHeader/Myheader";
import "../App.css";
import EditForm from "../components/EditForm/EditForm";
const EditUser = () => {
  const testData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  return (
    <div className="App">
      <Myheader />
      <UserToEdit
        url={
          "https://20.img.avito.st/image/1/1.ryjkQ7a5A8HS6sHEtlWDFiLgBctQYAsDVeABxVjqCcM.ZneBo-WZvM3ycwB_dD7Pu6v1wJ0wmgCgZaDSqAaKObw"
        }
      />
      <EditForm data={testData} />
    </div>
  );
};

export default EditUser;
