import { Route, Routes } from "react-router-dom";

import "./styles/base.css";

import UsersListPage from "./pages/UsersListPage";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<UsersListPage />} />
        {/* TODO: implement user details page route. */}
      </Route>
    </Routes>
  );
}
