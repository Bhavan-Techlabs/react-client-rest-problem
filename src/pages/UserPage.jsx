import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    if (userId && users) {
      const user = users.find((user) => user.id === userId);
      user && setUser(user);
    }
  }, [userId]);

  return (
    <>
      <h1>User Page</h1>
      <div className="user-card">
        <img loading="lazy" alt={user.name} src={user.avatar} />
        <h1>{user.name}</h1>
        <p>{user.address}</p>
      </div>
      {/* <User user={user} /> */}
    </>
  );
};

export default UserPage;
