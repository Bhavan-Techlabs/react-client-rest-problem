import { Route, Routes } from "react-router-dom";

import "antd/dist/reset.css";
import "./styles/base.css";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersListPage />} />
        {/* TODO: implement user details page route. example = '/users/{userId}' */}
      </Route>
    </Routes>
  );
}
