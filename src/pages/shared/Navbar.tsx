import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  MoonOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";
import logo from "../../..//src/assets/logo.png";
import { logout, selectCurrentUser } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "sonner";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    toast.success("Successfully Logged Out.");
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="flex gap-2 items-center p-2 hover:bg-primary hover:text-white rounded"
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
    <nav className="bg-[#001F3F] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="size-16" />
          <span className="text-xl font-bold text-hero font-hero">
            GAME GROUND
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 font-text">
          <Link
            to="/"
            className={`font-semibold ${
              isActive("/") ? "text-white" : "text-[#0099FF]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`font-semibold ${
              isActive("/about-us") ? "text-white" : "text-[#0099FF]"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className={`font-semibold ${
              isActive("/contact-us") ? "text-white" : "text-[#0099FF]"
            }`}
          >
            Contact Us
          </Link>
          <Link
            to="/facility-listing"
            className={`font-semibold ${
              isActive("/facility-listing") ? "text-white" : "text-[#0099FF]"
            }`}
          >
            Facilities
          </Link>
        </div>

        {/* Right Side: Theme Toggle and Avatar */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          {theme ? (
            <SunOutlined
              className="text-[#0099FF] text-2xl cursor-pointer"
              onClick={() => setTheme(false)}
            />
          ) : (
            <MoonOutlined
              className="text-[#0099FF] text-2xl cursor-pointer"
              onClick={() => setTheme(true)}
            />
          )}

          {/* User Section */}
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
            <div className="space-x-4 hidden lg:flex items-center">
              <Link
                to="/login"
                className="text-[#0099FF] font-bold hover:text-white"
              >
                Login
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#0099FF] text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#001F3F] text-center">
          <div className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="text-[#0099FF] font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-[#0099FF] font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-[#0099FF] font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/facility-listing"
              className="text-[#0099FF] font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Facilities
            </Link>

            {/* Conditionally render login and signup buttons */}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="text-[#0099FF] font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
