import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

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
    <div>
      <p>{users[1].name}</p>
      <div className="user-card">
        {/* <img loading="lazy" alt={users[id].name} src={users[id].avatar} /> */}
        <h1 className="user-name">{users[id].name}</h1>
        {/* <p className="user-address">{user.address}</p> */}
      </div>
    </div>
  );
};

export default UserPage;
