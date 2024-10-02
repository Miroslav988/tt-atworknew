import React from "react";
import UserCard from "../UI/UserCard/UserCard";
import cl from "./ActiveContainer.module.css";

const ActiveContainer = ({
  users,
  onToggleActive,
  onDeleteCard,
  onEditUser,
}) => {
  return (
    <section>
      <h1 className={`${cl.containerTitle} title`}>Активные</h1>
      <div className={cl.container}>
        {users.map((user) => (
          <UserCard
            url={
              "https://20.img.avito.st/image/1/1.ryjkQ7a5A8HS6sHEtlWDFiLgBctQYAsDVeABxVjqCcM.ZneBo-WZvM3ycwB_dD7Pu6v1wJ0wmgCgZaDSqAaKObw"
            }
            userName={user.username}
            companyName={user.company.name}
            city={user.address.city}
            key={user.id}
            isActive={true}
            onToggleActive={() => onToggleActive(user, true)}
            onDeleteCard={onDeleteCard}
            onEditUser={onEditUser}
            user={user}
          />
        ))}
      </div>
    </section>
  );
};

export default ActiveContainer;
