// This is the user card which is to be displayed in list view
// You can edit this file if you want

import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

function User({ user }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate("/users/" + user.id);
      }}
      hoverable
      style={{ margin: "10px" }}
      cover={<img loading="lazy" alt={user.name} src={user.avatar} />}
    >
      <Meta title={user.name} description={user.address} />
    </Card>
  );
}

export default User;
