import React, { useState } from "react";
import cl from "./MyEditBtn.module.css";

const MyEditBtn = ({
  isActive,
  onToggleActive,
  onDeleteCard,
  handleEdit,
  onEditUser,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnClick = () => {
    setIsOpen(!isOpen);
  };
  const handleToggleActive = () => {
    onToggleActive(!isActive);
  };
  const handleDeleteCard = () => {
    onDeleteCard();
  };

  return (
    <div>
      <button className={cl.btn} onClick={btnClick}>
        ...
      </button>
      {isOpen && (
        <div className={cl.selectMenu}>
          {isActive ? (
            <>
              <button className={`${cl.option} t2M`} onClick={onEditUser}>
                Редактировать
              </button>
              <button
                className={`${cl.option} t2M`}
                onClick={handleToggleActive}
              >
                Архивировать
              </button>
              <button className={`${cl.option} t2M`} onClick={handleDeleteCard}>
                Скрыть
              </button>
            </>
          ) : (
            <option className={`${cl.option} t2M`} onClick={handleToggleActive}>
              Активировать
            </option>
          )}
        </div>
      )}
    </div>
  );
};

export default MyEditBtn;
