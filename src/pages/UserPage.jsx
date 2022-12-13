import { useSelector, useDispatch } from "react-redux";
import { addUsers, getUser } from "../reducer/userReducer";

const UserPage = ({ user }) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  console.log(dispatch(getUser("2")));

  return <>user detail page</>;
};

export default UserPage;
