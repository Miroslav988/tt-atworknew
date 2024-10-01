import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import EditPage from "./EditUser/EditUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
