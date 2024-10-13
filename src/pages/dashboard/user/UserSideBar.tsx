/* eslint-disable @typescript-eslint/no-explicit-any */

import logo from "../../../assets/logo.png";
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const UserSideBar = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("");// Get the current location (active route)
  
  const itemList = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      route: "/user/dashboard",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "My Bookings",
      route: "/user/dashboard/my-booking",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Profile",
      route: "/user/dashboard/profile", // Example profile route
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "Settings",
      route: "/user/dashboard/settings", // Example settings route
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

export default UserSideBar;
