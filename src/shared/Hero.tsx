import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../design/heroDesign.css";
import hero from "../assets/hero/Soccer-Ball-PNG-Clipart-Background.png";
import heroFootball from "../assets/hero/heroFootball.png";

import footballGround from "../assets/hero/football-ground.jpg";
import swimingPool from "../assets/hero/swiming-pool.jpg";
import badminton from "../assets/hero/badmintion-cort.jpg";
import cricket from "../assets/hero/cricket-ground.jpg";
import basketball from "../assets/hero/basketball-court.jpeg";
import tenis from "../assets/hero/TENNIS-court.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const sliderImages = [
    { img: footballGround, label: "Football Field" },
    { img: swimingPool, label: "Swimming Pool" },
    { img: badminton, label: "Badminton Court" },
    { img: cricket, label: "Cricket Ground" },
    { img: basketball, label: "Basketball Court" },
    { img: tenis, label: "Tennis Court" },
  ];

  return (
    <div
      className="h-screen flex items-center justify-center relative px-4 md:px-12 bg-white dark:bg-gray-700 bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "400px",
        backgroundPosition: "left bottom",
      }}
    >
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 max-w-7xl mx-auto w-full">
        {/* Left Content Section */}
        <div
          className="flex flex-col justify-center w-[90%] md:w-[45%] mx-auto text-center md:text-left animate-fade-in"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-hero font-hero text-blue-600">
            Welcome to <span className="text-green-500">GameGround!</span>
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-700 mt-4 font-title dark:text-white">
            "Where Every Game Comes Alive!"
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4 font-text dark:text-white">
            Discover top-notch sports facilities and book your slots easily.
            Experience a seamless platform for all your favorite sports!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 mt-6">
            <button
              onClick={() => navigate("/facility-listing")}
              className="button-primary px-6 py-3 text-sm md:text-base"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="button-secondary px-6 py-3 text-sm md:text-base"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Slider Section */}
        <div
          className="w-full md:w-[50%] animate-slider max-w-md md:max-w-none"
          data-aos="fade-up"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper rounded-lg"
          >
            {sliderImages.map(({ img, label }, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-lg overflow-hidden h-full">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                    {label}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Floating Elements */}
      <img
        src={heroFootball}
        className="absolute floating-pattern w-10 h-10 md:w-16 md:h-16 rounded-full top-5 left-5"
        alt="floating football"
      />

      {/* <div className="absolute bottom-5 right-5 w-16 h-16 md:w-24 md:h-24 bg-green-400 rounded-full opacity-30 animate-bounce"></div> */}
      <img
        src={heroFootball}
        className="absolute bottom-5 right-5 w-16 h-16 md:w-24 md:h-24 animate-bounce"
        alt=""
      />
    </div>
  );
};

export default Hero;
