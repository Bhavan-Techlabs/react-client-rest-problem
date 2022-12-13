import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../components/User";

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
      <h1>User Page</h1>
      {user && <User user={user} />}
    </>
  );
};

export default UserPage;
