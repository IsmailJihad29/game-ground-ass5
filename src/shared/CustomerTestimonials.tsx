import { Avatar, Carousel } from "antd";
import { testimonialData } from "./fakeData";

const CustomerTestimonials = () => {
  return (
    <div className="dark:bg-gradient-to-b from-slate-800 to-slate-900 bg-gradient-to-b from-lightBlue to-blue-900 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Left section with heading */}

        <div className="w-full md:w-[50%] flex justify-center items-center p-4">
          <div>
            <p className="uppercase font-hero text-primary font-medium mb-2 tracking-wider text-lightBlue text-xl">
              Hear From Our Customers
            </p>
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
        <div className="w-full md:w-[50%] relative">
          {/* Rotating Glowing Border */}
          <div className="absolute inset-0 rounded-lg border-[3px] border-gradient-to-r from-lightBlue to-blue-500 animate-spin-slow"></div>

          {/* Testimonial Box */}
          <div className="relative backdrop-blur-lg bg-opacity-10 bg-darkViolet dark:bg-slate-700 h-full w-full p-8 rounded-lg shadow-xl border border-lightBlue transition-transform transform hover:scale-105">
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
                  <blockquote className="text-lg italic text-white leading-6 mb-2 font-primary">
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
