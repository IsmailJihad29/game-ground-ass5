import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentToken } from "../../../redux/features/userSlice";
import { verifyToken } from "../../../utils/verifyToken";
import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
// import AdminSidebar from "./admin/AdminSidebar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import CustomHeader from "../CustomHeader";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../../components/layout/ProtectedRoute";
import AdminSidebar from "./adminSidebar";

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = useAppSelector(useCurrentToken);

  let userData;
  if (token) {
    userData = verifyToken(token);
  }

  const userRole = (userData as { role?: string }).role;

  return (
    <ProtectedRoute role={"admin"}>
      <Layout className="bg-white border">
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider  dashboard-bg shadow-lg rounded-lg m-3"
        >
          {userRole && userRole === "admin" && <AdminSidebar/>}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="trigger-btn"
          />
        </Sider>
        <Layout>
          <Header className="header ">
            <CustomHeader />
          </Header>
          <Content className="content border">
            

            {userRole && userRole === "admin" && (
              // <UserMainContent></UserMainContent>
              <Outlet />
            )}
          </Content>
        </Layout>
      </Layout>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
