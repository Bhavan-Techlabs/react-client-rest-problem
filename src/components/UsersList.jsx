import "../styles/base.css";
import User from "../components/User";

function UsersList(props) {
  // TODO: Implement users list in grid view

  return (
    <div className="card-container">
      {props.users.map((user) => {
        return <User user={user} />;
      })}
    </div>
  );
}

export default UsersList;
