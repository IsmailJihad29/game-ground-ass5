import { Avatar, Input } from "antd";

const Header = () => {
  return (
    <div className="dashboard-header">
      <Input.Search placeholder="Search..." className="dashboard-search" />
      <Avatar
        src="https://avatars.githubusercontent.com/u/1"
        size={48}
        className="dashboard-avatar"
      />
      <span className="dashboard-username">John Doe</span>
    </div>
  );
};

export default Header;
