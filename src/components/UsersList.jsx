import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import User from "./User";
import { addUsers } from "../reducer/UserReducer";

function UsersList() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://608b7a57737e470017b74d29.mockapi.io/api/v1/users"
      );
      const data = await response.json();

      if (data) {
        setUsers(data);
        dispatch(addUsers(data));
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="user-list-wrapper">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default UsersList;
