// This is the user list page ("/users") component
// You can edit this file if you want
import "../styles/base.css";

import { useEffect, useState } from "react";
import UsersList from "../components/UsersList";

export default function UsersListPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch(
        "https://608b7a57737e470017b74d29.mockapi.io/api/v1/users"
      );
      const data = await res.json();
      setUsers(data);
    };

    getUserData();
  });
  return (
    <div className="container">
      <h1>Users</h1>
      <UsersList users={users} />
    </div>
  );
}
