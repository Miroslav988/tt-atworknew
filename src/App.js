import { useEffect, useState } from "react";
import "./App.css";
import ActiveContainer from "./components/ActiveContainer/ActiveContainer";
import ArchiveContainer from "./components/ArchiveContainer/ArchiveContainer";
import Myheader from "./components/MyHeader/Myheader";
import "./normalize.css";
import fetchUsers from "./FetchUsers ";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const [activUsers, setActivUsers] = useState([]);
  const [archiveUsers, setArchiveUsers] = useState([]);
  const handleEditUser = (user) => {
    console.log(user);
    navigate("/edit", { state: { user } });
  };
  useEffect(() => {
    fetchUsers().then((users) => {
      setActivUsers(users);
    });
  }, []);
  const handleToggleActive = (user, isActive) => {
    if (isActive) {
      setActivUsers(activUsers.filter((u) => u !== user));
      setArchiveUsers([...archiveUsers, user]);
    } else {
      setArchiveUsers(archiveUsers.filter((u) => u !== user));
      setActivUsers([...activUsers, user]);
    }
    const updatedUsers = [...activUsers, ...archiveUsers];
    const index = updatedUsers.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      updatedUsers[index].isActive = isActive;
    }
  };
  const handleDeleteCard = (user) => {
    setActivUsers(activUsers.filter((u) => u !== user));
  };
  return (
    <div className="App">
      <Myheader />
      <ActiveContainer
        users={activUsers}
        onToggleActive={handleToggleActive}
        onDeleteCard={handleDeleteCard}
        onEditUser={handleEditUser}
      />
      <ArchiveContainer
        users={archiveUsers}
        onToggleActive={handleToggleActive}
      />
    </div>
  );
}

export default App;
