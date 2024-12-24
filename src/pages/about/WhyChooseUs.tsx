// import {
//   FaChartLine,
//   FaDollarSign,
//   FaRegThumbsUp,
//   FaShieldAlt,
//   FaStar,
//   FaTrophy,
//   FaUsers,
//   FaWifi,
//   FaHandHoldingHeart, // Added new icon
// } from "react-icons/fa";

// const WhyChooseUs = () => {
//   return (
//     <div className="mx-auto bg-white dark:bg-gray-900 " >
//       <div className="container mx-auto text-center mb-12">
//         <h2 className="text-title" data-aos="fade-up">
//           Why Choose Us
//         </h2>
//         <p
//           className="text-subtitle max-w-3xl mx-auto leading-relaxed"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           "Discover Why We Stand Out with Exceptional{" "}
//           <span className="text-hero font-semibold">service</span>,{" "}
//           <span className="text-hero font-semibold">quality</span>, and{" "}
//           <span className="text-hero font-semibold">commitment</span> to your
//           success."
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[70%] mx-auto">
//         {/* Reason 1 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 group-hover:scale-110 transition-transform duration-300">
//             <FaChartLine className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             20+ facilities available.
//           </p>
//         </div>

//         {/* Reason 2 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 group-hover:scale-110 transition-transform duration-300">
//             <FaUsers className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             Trusted by 10,000+ sports enthusiasts.
//           </p>
//         </div>

//         {/* Reason 3 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:scale-110 transition-transform duration-300">
//             <FaStar className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             Rated 4.9/5 by our users.
//           </p>
//         </div>

//         {/* Reason 4 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 group-hover:scale-110 transition-transform duration-300">
//             <FaDollarSign className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             Affordable prices with no hidden fees.
//           </p>
//         </div>

//         {/* Reason 5 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="500"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:scale-110 transition-transform duration-300">
//             <FaRegThumbsUp className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             Excellent customer service and support.
//           </p>
//         </div>

//         {/* Reason 6 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="600"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-red-400 to-red-600 group-hover:scale-110 transition-transform duration-300">
//             <FaShieldAlt className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             Top-notch security for your personal data.
//           </p>
//         </div>

//         {/* Reason 7 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="700"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 group-hover:scale-110 transition-transform duration-300">
//             <FaTrophy className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             Award-winning facilities and services.
//           </p>
//         </div>

//         {/* Reason 8 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="800"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 group-hover:scale-110 transition-transform duration-300">
//             <FaWifi className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             Free Wi-Fi at all our facilities.
//           </p>
//         </div>

//         {/* New Reason 9 */}
//         <div
//           className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           data-aos="fade-up"
//           data-aos-delay="900"
//         >
//           <div className="p-4 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 group-hover:scale-110 transition-transform duration-300">
//             <FaHandHoldingHeart className="text-white text-4xl" />
//           </div>
//           <p className="text-gray-700 dark:text-white text-lg font-primary">
//             Committed to sustainability and community support.
//           </p>
//         </div>
        
//       </div>
//       <div className="container mx-auto mt-12 text-center" data-aos="fade-up">
//         <button className="button-primary font-primary transition">
//           Explore Facilities
//         </button>
//       </div>

      
//     </div>
//   );
// };

// export default WhyChooseUs;

import {
  FaChartLine,
  FaDollarSign,
  FaRegThumbsUp,
  FaShieldAlt,
  FaStar,
  FaTrophy,
  FaUsers,
  FaWifi,
  FaHandHoldingHeart, // Added new icon
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="mx-auto bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-title" data-aos="fade-up">
          Why Choose Us
        </h2>
        <p
          className="text-subtitle max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          "Discover Why We Stand Out with Exceptional{" "}
          <span className="text-hero font-semibold">service</span>,{" "}
          <span className="text-hero font-semibold">quality</span>, and{" "}
          <span className="text-hero font-semibold">commitment</span> to your
          success."
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[70%] mx-auto">
        {/* Map over card data */}
        {[
          {
            icon: <FaChartLine className="text-white text-4xl" />,
            text: "20+ facilities available.",
            gradient: "from-sky-400 to-sky-600",
          },
          {
            icon: <FaUsers className="text-white text-4xl" />,
            text: "Trusted by 10,000+ sports enthusiasts.",
            gradient: "from-blue-400 to-blue-600",
          },
          {
            icon: <FaStar className="text-white text-4xl" />,
            text: "Rated 4.9/5 by our users.",
            gradient: "from-cyan-400 to-cyan-600",
          },
          {
            icon: <FaDollarSign className="text-white text-4xl" />,
            text: "Affordable prices with no hidden fees.",
            gradient: "from-green-400 to-green-600",
          },
          {
            icon: <FaRegThumbsUp className="text-white text-4xl" />,
            text: "Excellent customer service and support.",
            gradient: "from-yellow-400 to-yellow-600",
          },
          {
            icon: <FaShieldAlt className="text-white text-4xl" />,
            text: "Top-notch security for your personal data.",
            gradient: "from-red-400 to-red-600",
          },
          {
            icon: <FaTrophy className="text-white text-4xl" />,
            text: "Award-winning facilities and services.",
            gradient: "from-purple-400 to-purple-600",
          },
          {
            icon: <FaWifi className="text-white text-4xl" />,
            text: "Free Wi-Fi at all our facilities.",
            gradient: "from-teal-400 to-teal-600",
          },
          {
            icon: <FaHandHoldingHeart className="text-white text-4xl" />,
            text: "Committed to sustainability and community support.",
            gradient: "from-indigo-400 to-indigo-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 p-6 rounded-2xl border-2 border-transparent shadow-lg bg-white dark:bg-gray-800 ease-in-out transform hover:scale-105 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-${item.gradient.replace(
              "to-",
              "from-"
            )}`}
            data-aos="fade-up"
            data-aos-delay={`${100 * (index + 1)}`}
          >
            <div
              className={`p-4 rounded-full bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform duration-300`}
            >
              {item.icon}
            </div>
            <p className="text-gray-700 dark:text-white text-lg font-primary">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-12 text-center" data-aos="fade-up">
        <button className="button-primary font-primary transition">
          Explore Facilities
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
