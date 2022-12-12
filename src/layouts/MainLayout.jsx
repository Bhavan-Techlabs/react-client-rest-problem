// This is the application layout for the pages
// You can edit this file if you want

import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const MainLayout = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            {
              icon: <HomeOutlined />,
              label: "Home",
              key: "",
              onClick: () => {
                navigate("/");
              }
            },
            {
              icon: <UserOutlined />,
              label: "Users",
              key: "users",
              onClick: () => {
                navigate("/users");
              }
            }
          ]}
        />
      </Header>
      <Content
        style={{
          display: "grid",
          justifyItems: "center",
          margin: "20px",
          padding: "20px"
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center"
        }}
      >
        <Text italic>Copyright © 2022 KAYA. All rights reserved.</Text>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
