import { Route, Routes } from "react-router-dom";

import "./styles/base.css";

import UsersListPage from "./pages/UsersListPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<UsersListPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Route>
    </Routes>
  );
}
