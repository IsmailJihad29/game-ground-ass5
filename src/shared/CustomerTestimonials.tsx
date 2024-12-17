import { Avatar, Carousel } from "antd";
import { testimonialData } from "./fakeData";
import logo from "../assets/logo.png";
const CustomerTestimonials = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8 ">
        {/* Left section with heading */}

        <div
          className="w-full md:w-[50%] flex justify-center items-center p-4"
          data-aos="fade-right"
        >
          <div>
            <p className="text-title">Hear From Our Customers</p>
            <h2 className="text-3xl text-hero font-title md:text-4xl leading-tight text-veryDarkViolet dark:text-cyanLight font-bold">
              Experience that Speaks for Itself
            </h2>
            <p className="mt-2 text-md font-primary text-fourth-color dark:text-slate-400">
              Discover why our customers love coming back. Real feedback from
              real people who enjoyed their time at our facilities.
            </p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="w-full md:w-[50%] relative" data-aos="fade-left">
          {/* Rotating Glowing Border */}
          <div className="absolute inset-0 rounded-lg border-[3px] border-gradient-to-r from-lightBlue to-blue-500 animate-spin-slow"></div>

          <div className="relative  h-full w-full p-8 rounded-lg shadow-xl border border-lightBlue transition-transform transform hover:scale-105">
            <Carousel autoplay dots dotPosition="bottom">
              {testimonialData?.map((item, indx) => (
                <figure
                  key={indx}
                  className="flex flex-col items-center justify-center h-full p-6 text-center"
                >
                  <Avatar
                    size={84}
                    src={item?.photo}
                    className="mb-4 transition-transform transform hover:scale-110 rounded-full shadow-lg"
                  />
                  <blockquote className="text-lg italic text-subtitle leading-6 mb-2 font-primary">
                    "{item?.comment}"
                  </blockquote>
                  <p className="text-lg font-medium text-lightBlue font-title text-hero">
                    &mdash; {item?.name}
                  </p>
                </figure>
              ))}
            </Carousel>

            {/* Small Icon in the bottom right */}
            <div className="absolute bottom-4 right-4">
              <img src={logo} className="w-16 h-16 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
