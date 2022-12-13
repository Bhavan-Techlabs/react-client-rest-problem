import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";

import "./styles/base.css";

import UsersListPage from "./pages/UsersListPage";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<UsersListPage />} />
        <Route path="/users/:id" element={<UserPage />} />

        {/* TODO: implement user details page route. */}
      </Route>
    </Routes>
  );
}
