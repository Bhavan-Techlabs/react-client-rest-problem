// This is the user card which is to be displayed in list view
// You can edit this file if you want
import React from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>{user.name}</h1>
      <p>{user.address}</p>
    </div>
  );
}

export default User;
