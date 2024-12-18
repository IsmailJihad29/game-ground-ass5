import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import heroFootball from "../../assets/hero/heroFootball.png";
import logo from "../../assets/logo.png";
const Quotes = () => {
    return (
       <div className="bg-white dark:bg-gray-900 ">
         <div className=" mx-auto w-[90%] md:w-[70%]" >
        <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-br from-blue-400 to-blue-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-br from-green-400 to-green-500 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 sm:p-12 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
          <div className="absolute top-6 left-6 w-8 h-8  rounded-full animate-bounce">
            <img src={heroFootball} alt="" />
          </div>
          <div className="absolute bottom-6 right-6 w-14 h-14  rounded-full animate-pulse delay-200">
            <img src={logo} alt="" />
          </div>

          <div className="flex flex-col items-center">
            <div className="text-6xl text-gray-700 dark:text-white  mb-4 animate-fade-in">
              <FaQuoteLeft />
            </div>

            <blockquote className="text-lg sm:text-2xl italic font-light text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              "Great things are done when men and mountains meet."
            </blockquote>

            <div className="text-6xl text-gray-700 dark:text-white mt-4 animate-fade-in">
              <FaQuoteRight />
            </div>

            <p className="mt-6 font-bold text-blue-600 text-lg sm:text-xl tracking-widest animate-fade-in">
              - William Blake
            </p>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Quotes;