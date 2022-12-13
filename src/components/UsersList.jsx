import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import { addUsers, getUser } from "../reducer/userReducer";

function UsersList() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://608b7a57737e470017b74d29.mockapi.io/api/v1/users"
      );
      dispatch(addUsers(data));
    };

    getUsers();
  }, []);
  // TODO: Implement users list in grid view
  return (
    <>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </>
  );
}

export default UsersList;
