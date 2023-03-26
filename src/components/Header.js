import { Layout, Menu } from "antd";
const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#001529",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <span
        className="main_title"
        style={{
          fontSize: "20px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        MAP UP APP
      </span>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="login">Login</Menu.Item>
        <Menu.Item key="logout">Logout</Menu.Item>
        <Menu.Item key="profile">Profile</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
