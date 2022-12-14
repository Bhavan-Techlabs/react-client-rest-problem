import React from "react";
import { useState } from "react";

const UserForm = ({ user }) => {
  const [formState, setFormState] = useState({ name: "", address: "" });

  const onUpdate = (e) => {
    e.preventDefault();

    const updateUser = async (id, data) => {
      return await fetch(
        `https://608b7a57737e470017b74d29.mockapi.io/api/v1/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    };

    const formToSubmit = { ...user, ...formState };
    updateUser(user.id, formToSubmit);
    alert("Updated!");
  };

  return (
    <div className="form-wrapper">
      <form>
        <p>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={formState.name}
            onChange={(e) => {
              setFormState((s) => ({ ...s, name: e.target.value }));
            }}
          />
        </p>
        <p>
          <label>Address: </label>
          <input
            name="address"
            type="text"
            value={formState.address}
            onChange={(e) => {
              setFormState((s) => ({ ...s, address: e.target.value }));
            }}
          />
        </p>
        <button onClick={onUpdate}>Update User</button>
      </form>
    </div>
  );
};

export default UserForm;
