import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import step1 from "../../assets/step1.png";
import step3 from "../../assets/step3.png";
import step5 from "../../assets/step5.png";
import step7 from "../../assets/step7.png";
import SectionDevider from "../shared/SectionDevider";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, // Ensures animations happen only once
    });
  }, []);

  return (
    <div className="dark:bg-gray-900 bg-white px-10">
      <div className="container mx-auto py-16 px-8">
        {/* Header Section */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-title">Booking Made Easy</h2>
          <p className="text-subtitle">
            Learn how to book sports facilities with our simple, step-by-step
            guide in the 'How It Works' section.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-32">
          {/* Step 1 */}
          <div
            className="py-4 lg:px-16 flex flex-row-reverse"
            data-aos="fade-up"
          >
            <img src={step1} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 1: Explore Options & Select Facility
              </h4>
              <p className="p-2 lg:text-sm font-primary text-subtitle">
                Browse through various sports facilities and find the one that
                suits you best.
              </p>
            </div>
          </div>

          <div className="hidden lg:block"></div>

          {/* Step 2 */}
          <div className="relative hidden lg:block" data-aos="fade-up">
            <div className="flex justify-end items-end absolute -top-32 -right-20">
              <svg
                className="dash-border"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "65px" }}
              >
                <path
                  d="M1.72656 1.86328C1.72656 100.386 81.5642 180.193 180.125 180.193"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex py-4 lg:px-16" data-aos="fade-up">
            <img src={step3} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 2: Check Availability & Book
              </h4>
              <p className="p-2 text-subtitle font-primary lg:text-sm">
                Select your preferred time slot and confirm your booking in
                seconds.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="flex py-4 lg:px-16 flex-row-reverse"
            data-aos="fade-up"
          >
            <img src={step5} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 3: Easy Payment Options
              </h4>
              <p className="p-2 text-subtitle font-primary lg:text-sm">
                Ready to secure your spot? Click 'Book Now' to confirm your
                reservation and get ready for your game! Choose from multiple
                payment methods for a seamless checkout experience.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block" data-aos="fade-up">
            <div className="flex justify-end items-end absolute -top-32 -left-20">
              <svg
                className="dash-border"
                width="182"
                height="181"
                viewBox="0 0 182 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ right: "65px" }}
              >
                <path
                  d="M180.273 1.42188C180.273 99.9447 100.436 179.752 1.875 179.752"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative hidden lg:block" data-aos="fade-up">
            <div className="flex justify-end items-end absolute -top-32 -right-20">
              <svg
                className="dash-border"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "65px" }}
              >
                <path
                  d="M1.72656 1.86328C1.72656 100.386 81.5642 180.193 180.125 180.193"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex py-4 lg:px-16" data-aos="fade-up">
            <img src={step7} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 4: Enjoy Your Game
              </h4>
              <p className="p-2 text-subtitle lg:text-sm font-primary">
                Show up at your reserved time and enjoy your game hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionDevider/>
    </div>
  );
};

export default HowItWorks;
