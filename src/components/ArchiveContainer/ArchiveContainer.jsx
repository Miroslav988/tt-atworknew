import React from "react";
import classes from "../ActiveContainer/ActiveContainer.module.css";
import UserCard from "../UI/UserCard/UserCard";
const ArchiveContainer = ({ users, onToggleActive }) => {
  return (
    <section>
      <h1 className={`${classes.containerTitle} title`}>Архив</h1>
      <div className={classes.container}>
        {users.map((user) => (
          <div style={{ filter: "grayscale(1)" }} key={user.id}>
            <UserCard
              url={
                "https://20.img.avito.st/image/1/1.ryjkQ7a5A8HS6sHEtlWDFiLgBctQYAsDVeABxVjqCcM.ZneBo-WZvM3ycwB_dD7Pu6v1wJ0wmgCgZaDSqAaKObw"
              }
              userName={user.username}
              companyName={user.company.name}
              city={user.address.city}
              isActive={false}
              onToggleActive={() => onToggleActive(user, false)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchiveContainer;
