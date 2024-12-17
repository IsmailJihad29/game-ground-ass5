

import {
  FaHandsHelping,
  FaGlobe,
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const MissionStatementSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-20 relative overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-title" data-aos="fade-up">
          Our Mission
        </h2>
        <p
          className="text-subtitle max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We strive to create a platform where everyone can easily find and book
          the best sports facilities, fostering a sense of{" "}
          <span className="text-hero font-semibold">community</span>,{" "}
          <span className="text-hero font-semibold">wellness</span>, and{" "}
          <span className="text-hero font-semibold">competition</span>.
        </p>
      </div>

      

      {/* Mission Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Purpose */}
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          data-aos="zoom-in"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaGlobe className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-hero font-hero group-hover:text-blue-500 transition duration-300">
            Purpose
          </h3>
          <p className="text-gray-700 dark:text-white font-primary leading-relaxed">
            To provide a seamless experience that connects sports enthusiasts
            with premium facilities.
          </p>
        </div>

        {/* Values */}
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaHandsHelping className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-hero font-hero group-hover:text-green-500 transition duration-300">
            Values
          </h3>
          <p className="text-gray-700 dark:text-white font-primary leading-relaxed">
            Integrity, inclusivity, and a passion for fostering sportsmanship
            and community growth.
          </p>
        </div>

        {/* Vision */}
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaTrophy className="text-3xl sm:text-4xl" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-hero font-hero group-hover:text-yellow-500 transition duration-300">
            Vision
          </h3>
          <p className="text-gray-700 dark:text-white font-primary leading-relaxed">
            To become the leading platform for sports facility bookings
            globally, promoting active lifestyles.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto mt-12" data-aos="fade-up">
        <h3 className="text-title mb-8 text-center">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <FaChartLine className="text-3xl sm:text-4xl text-blue-500" />
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              500+ facilities available worldwide.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaUsers className="text-3xl sm:text-4xl text-blue-500" />
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Trusted by 10,000+ sports enthusiasts.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaStar className="text-3xl sm:text-4xl text-blue-500" />
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Rated 4.9/5 by our users.
            </p>
          </div>
        </div>
      </div>

      {/* Quote */}

      <div className=" w-[70%] mx-auto mt-10" data-aos="zoom-in">
        <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-br from-blue-400 to-blue-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-green-400 to-green-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
    

        {/* Card with Animation */}
        <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 sm:p-12 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
          {/* Floating Abstract Icons */}
          <div className="absolute top-6 left-6 w-8 h-8 bg-blue-400 opacity-50 rounded-full animate-bounce"></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 bg-green-400 opacity-50 rounded-full animate-bounce delay-200"></div>

          {/* Quote Content */}
          <div className="flex flex-col items-center">
            {/* Top Icon */}
            <div className="text-6xl text-gray-700 dark:text-white  mb-4 animate-fade-in">
              <FaQuoteLeft />
            </div>

            {/* Quote Text */}
            <blockquote className="text-lg sm:text-2xl italic font-light text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              "Great things are done when men and mountains meet."
            </blockquote>

            {/* Bottom Icon */}
            <div className="text-6xl text-gray-700 dark:text-white mt-4 animate-fade-in">
              <FaQuoteRight />
            </div>

            {/* Author Name */}
            <p className="mt-6 font-bold text-blue-600 text-lg sm:text-xl tracking-widest animate-fade-in">
              - William Blake
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="container mx-auto mt-12 text-center" data-aos="fade-up">
        <button className="button-primary font-primary transition">
          Explore Facilities
        </button>
      </div>
    </div>
  );
};

export default MissionStatementSection;
