import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../components/User";
import UserForm from "../components/UserForm";

const UserPage = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    if (userId && users) {
      const user = users.find((user) => user.id === userId);
      if (user) {
        setUser(user);
      }
    }
  }, [userId]);

  return (
    <>
      <div className="user-page-wrapper">
        <h1>User Page</h1>
        {user && <User user={user} />}
        {user && <UserForm user={user} />}
      </div>
    </>
  );
};

export default UserPage;
