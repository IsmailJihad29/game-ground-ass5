/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../../../assets/logo.png";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu } from "antd";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("");
  const itemList = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      route: "/admin/dashboard",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Facility Management",
      route: "/admin/dashboard/facility-management",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "All Bookings",
      route: "/admin/dashboard/booking",
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "Create Admin",
      route: "/admin/dashboard/create-account",
    },
  ];

  const onClick = (e: any) => {
    const selectedItem = itemList.find((item) => item.key === e.key);
    if (selectedItem && selectedItem.route) {
      setSelectedKey(e.key); // Update the selected key state
      navigate(selectedItem.route);
    }
  };
  return (
    <div className="rounded-lg">
    <div className="logo flex items-center justify-center">
      <img className="size-28" src={logo} alt="Logo" />
    </div>

  
    <Menu
      mode="inline"
      onClick={onClick}
      items={itemList.map((item) => ({
        key: item.key,
        icon: item.icon,
        label: item.label,
      }))}
      selectedKeys={[selectedKey]}
      className="menu-bar bg-transparent"
    />
    
  </div>
  );
};

export default AdminSidebar;
