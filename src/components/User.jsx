// This is the user card which is to be displayed in list view
// You can edit this file if you want

import { useNavigate } from "react-router-dom";
import "../styles/base.css";

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div
      className="user-card"
      onClick={() => {
        navigate("/users/" + user.id);
      }}
    >
      <img loading="lazy" alt={user.name} src={user.avatar} />
      <h1 className="user-name">{user.name}</h1>
      <p className="user-address">{user.address}</p>
    </div>
  );
}

export default User;
