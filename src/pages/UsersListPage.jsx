// This is the user list page ("/users") component
// You can edit this file if you want

import { Typography } from "antd";
import UsersList from "../components/UsersList";

const { Title } = Typography;

export default function UsersListPage() {
  return (
    <div className="container">
      <Title>Users</Title>
      <UsersList />
    </div>
  );
}
