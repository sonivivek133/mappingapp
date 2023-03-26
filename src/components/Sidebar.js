import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        position: "fixed",
        height: "100vh",
        overflow: "auto",
        left: 0,
        top: "50%",
        zIndex: 10000,
        height: "calc(100vh - 75px)",
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="2" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
      <div className="sidebar-collapse" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        {!collapsed && <span className="sidebar-label">Collapse</span>}
      </div>
    </Sider>
  );
};

export default Sidebar;
