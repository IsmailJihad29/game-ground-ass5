import { UserOutlined } from "@ant-design/icons";
import { Flex, Menu } from "antd";

import logo from "../../assets/logo.png";

const Sidebar = () => {
  const itemList = [
    { key: "1", icon: <UserOutlined />, label: "Dashboard" },
    { key: "2", icon: <UserOutlined />, label: "Dashboard 2" },
    { key: "3", icon: <UserOutlined />, label: "Dashboard 3" },
  ];
  return (
    <div className="border ">
      <Flex align="center" justify="center" className="">
        <div className="logo">
          <img className="size-28" src={logo} alt="" />
        </div>
      </Flex>

      <Menu
        mode="inline"
        items={itemList}
        defaultSelectedKeys={["1"]}
        className="menu-bar"
      />
    </div>
  );
};

export default Sidebar;
