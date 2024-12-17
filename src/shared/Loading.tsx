import { Spin } from "antd";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Loading = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="dark:bg-gray-900 bg-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Spinner with customized color */}
        <Spin
          size="large"
          className="text-blue-500 animate-spin"
          style={{ fontSize: "48px", marginBottom: "20px" }}
        />

        {/* Text with fade-in animation */}
        <h1
          className="text-2xl md:text-3xl font-semibold text-hero font-hero dark:text-white opacity-80"
          data-aos="fade-right"
        >
          Just a moment, we’re getting things ready...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
