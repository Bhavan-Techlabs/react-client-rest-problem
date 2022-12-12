import { Button, Modal, Result } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container">
        <Result
          icon={
            <img src="https://w3gig-customer-web-dev.web.app/static/media/kaya-black.99d6353d.svg" />
          }
          title="Welcome to Kaya User Management System"
          subTitle="Create a new user or see the list of users"
          extra={[
            <Button type="primary" onClick={showModal} key="1">
              Create user
            </Button>,
            <Button
              key="2"
              onClick={() => {
                navigate("/users");
              }}
            >
              Users
            </Button>
          ]}
        />
      </div>
      <Modal
        title="Create New User"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        {/* TODO: Implement create user form here */}
      </Modal>
    </>
  );
};

export default HomePage;
