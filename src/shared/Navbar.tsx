import { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  MoonOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";
import logo from "../../src/assets/logo.png";
import { logout, selectCurrentUser } from "../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toast } from "sonner";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Added menuOpen state
  const { user } = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Successfully Logout.");
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="flex gap-2 items-center p-2 hover:bg-primary  hover:text-white rounded"
          onClick={() => navigate(`${user.role}/dashboard`)}
        >
          <UserOutlined />
          <p>My Profile</p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="flex gap-2 items-center p-2 hover:bg-error hover:text-white rounded"
          onClick={handleLogout}
        >
          <LogoutOutlined />
          <p>Logout</p>
        </div>
      ),
    },
  ];
  const isActive = (path: string) => location.pathname === path;
  return (
    <div className="bg-[#001F3F]">
      <div className="navbar container mx-auto">
        {/* Left: Logo */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="size-14" />
            <span className="text-xl font-hero font-bold text-[#0099FF]">
             GAME GROUND
            </span>
          </Link>
        </div>

        {/* Center: Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-primary">
            <li>
              <Link
                to="/"
                className="font-semibold text-[#0099FF]"
              >
               <button>Home</button>
              </Link>
            </li>
            <li>
              <Link
                 to="/about-us"
                 className={`font-semibold ${
                   isActive("/about-us") ? "text-white" : "text-[#0099FF]"
                 }`}
              >
                <button>About Us</button>
              </Link>
            </li>
            <li>
              <Link
               to="/contact-us"
                className={`font-semibold ${
                  isActive("/contact-us") ? "text-white" : "text-[#0099FF]"
                }`}
              >
               <button>Contact</button>
              </Link>
            </li>
            <li>
              <Link
              to="/facility-listing"
               className={`font-semibold ${
                 isActive("/facility-listing") ? "text-white" : "text-[#0099FF]"
               }`}
              >
                <button>Facilies</button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Theme Toggle & Avatar */}
        <div className="navbar-end space-x-4">
          {/* Theme Toggle */}
          {theme ? (
            <SunOutlined
              className="text-[#0099FF] text-3xl cursor-pointer"
              onClick={() => setTheme(false)}
            />
          ) : (
            <MoonOutlined
              className="text-[#0099FF] text-3xl cursor-pointer"
              onClick={() => setTheme(true)}
            />
          )}

          {/* User Dropdown */}
          {user && user?.role ? (
            <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
              <Avatar
                style={{
                  backgroundColor: "#2e4763",
                  verticalAlign: "middle",
                  cursor: "pointer",
                }}
                size={30}
                gap={4}
              >
                {user?.name[0]}
              </Avatar>
            </Dropdown>
          ) : (
            <div className="space-x-4 ">
              <Link
                to="/login"
                className="  text-[#0099FF] font-bold hover:text-white"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-end lg:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menuOpen state
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 p-4 bg-[#001F3F]">
          <Link to="/about-us" className="text-[#0099FF]">
            About Us
          </Link>
          <Link to="/contact-us" className="text-[#0099FF]">
            Contact Us
          </Link>
          <Link to="/facility-listing" className="text-[#0099FF]">
            Facility Listing
          </Link>
          <Link to="/login" className="text-[#0099FF]">
            Login
          </Link>
          <Link to="/register" className="text-[#0099FF]">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;











