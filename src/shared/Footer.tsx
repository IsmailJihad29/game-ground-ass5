import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <footer className="py-16 bg-[#001F3F]">
      {/* Footer Container */}
      <div className="container mx-auto px-6 md:px-16 space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
        {/* Logo and About Section */}
        <div className="flex flex-col items-center md:items-start text-lg font-light space-y-6">
          <NavLink to={"/"} className="flex justify-center items-center gap-2">
            <img className="h-12" src={logo} alt="Game Ground Logo" />
            <p className="text-2xl font-bold uppercase font-hero text-hero dark:text-fourth-color">
              Game Ground
            </p>
          </NavLink>
          <p className="text-white text-center md:text-left">
            Your ultimate destination for sports facility bookings. Experience a seamless way to reserve your spot today!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start text-lg font-light space-y-4">
          <h3 className="text-white text-xl font-bold font-title">Quick Links</h3>
          <NavLink
            to={"/about-us"}
            className="uppercase text-hero font-primary hover:text-lightBlue transition duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="uppercase text-hero font-primary hover:text-lightBlue transition duration-300"
          >
            Contact Us
          </NavLink>
          <NavLink
            to={"/facility-listing"}
            className="uppercase text-hero font-primary hover:text-lightBlue transition duration-300"
          >
            Facilities
          </NavLink>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h3 className="text-hero font-title text-xl font-bold">Follow Us</h3>
         
          <div className="flex space-x-6">
  <div className="p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500">
    <FacebookOutlined className="text-2xl text-white hover:text-lightBlue transition duration-300" />
  </div>
  <div className="p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500">
    <TwitterOutlined className="text-2xl text-white hover:text-lightBlue transition duration-300" />
  </div>
  <div className="p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500">
    <InstagramOutlined className="text-2xl text-white hover:text-lightBlue transition duration-300" />
  </div>
</div>

        </div>
      </div>

      {/* Copyright and Date Section */}
      <div className="container mx-auto text-center mt-12 w-[80%]  text-sm text-grayishBlue">
        <p className="text-white">
          Copyright ©{new Date().getFullYear()} All rights reserved by{" "}
          <span className="uppercase  text-hero font-hero">Ismail Hossen Jihad</span>.
        </p>
        <p className="text-white">
          Information refreshed on:{" "}
          <span className="text-lightBlue">{today}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
