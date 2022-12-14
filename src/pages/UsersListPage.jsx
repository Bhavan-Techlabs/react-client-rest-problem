// This is the user list page ("/users") component
// You can edit this file if you want
import React from "react";
import UsersList from "../components/UsersList";

export default function UsersListPage() {
  return (
    <div className="container">
      <h1>Users</h1>
      <UsersList />
    </div>
  );
}
