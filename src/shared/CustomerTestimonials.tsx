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

        <div className=" w-[60%] mx-auto mt-10" data-aos="zoom-in">
          <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-br from-blue-400 to-blue-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-green-400 to-green-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>

          {/* Card with Animation */}
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 sm:p-12 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
            {/* Floating Abstract Icons */}
            <div className="absolute top-6 left-6 w-8 h-8 bg-blue-400 opacity-50 rounded-full animate-bounce"></div>
            <div className="absolute bottom-6 right-6   rounded-full animate-bounce delay-200">
              {" "}
              <img src={logo} className="w-16 h-16 rounded-full shadow-lg" />
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
