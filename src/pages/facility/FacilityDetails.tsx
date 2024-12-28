import { useNavigate, useParams } from "react-router-dom";
import { useGetFacilityDetailsQuery } from "../../redux/api/facility/facilityApi";
import Loading from "../shared/Loading";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaParking,
  FaUserShield,
  FaTools,
  FaDoorOpen,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFacilityDetailsQuery(id);
  const navigate = useNavigate();

  const facility = data?.data[0];

  const handleNavigate = (id: string) => {
    navigate(`/booking/${id}`);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="dark:bg-gray-900 bg-white min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden transition transform duration-300"
          data-aos="fade-up"
        >
          {/* Hero Section */}
          <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] overflow-hidden rounded-t-xl">
            <img
              className="w-full h-full object-cover rounded-t-xl"
              src={facility.image}
              alt={facility.name}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

            {/* Facility Info Overlay */}
            <div
              className="absolute bottom-0 left-0 w-full p-6 flex flex-col md:flex-row justify-between items-end text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-title text-hero mb-2 transform transition-all duration-300 hover:scale-105">
                  {facility.name}
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-yellow-300 font-primary">
                  ${facility.pricePerHour} / hour
                </p>
              </div>
              <div className="text-right space-y-2">
                <h2 className="text-sm sm:text-lg font-semibold flex items-center gap-2 font-primary">
                  <FaMapMarkerAlt /> {facility.location}
                </h2>
                <h3 className="text-sm sm:text-lg font-semibold flex items-center gap-2 font-primary">
                  <FaCalendarAlt /> Available:{" "}
                  <span className="text-green-400">Yes</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Facility Description & Booking Section */}
          <div className="p-6 sm:p-8 space-y-10">
            {/* Description */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-xl sm:text-2xl font-bold font-title text-hero">
                Description
              </h2>
              <p className="text-gray-700 dark:text-white text-base sm:text-lg leading-relaxed font-primary">
                {facility.description}
              </p>
            </div>

            {/* Facility Features */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-lg sm:text-xl font-semibold font-title text-hero">
                Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg">
                <li className="flex items-center gap-3 text-green-600 font-primary">
                  <FaParking className="text-xl sm:text-2xl text-green-500" /> Parking Available
                </li>
                <li className="flex items-center gap-3 text-green-600 font-primary">
                  <FaDoorOpen className="text-xl sm:text-2xl text-green-500" /> Changing Rooms
                </li>
                <li className="flex items-center gap-3 text-green-600 font-primary">
                  <FaTools className="text-xl sm:text-2xl text-green-500" /> Equipment Rental
                </li>
                <li className="flex items-center gap-3 text-green-600 font-primary">
                  <FaUserShield className="text-xl sm:text-2xl text-green-500" /> Online Booking
                </li>
              </ul>
            </div>

            {/* Book Now Button */}
            <div
              className="flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <button
                onClick={() => handleNavigate(facility._id)}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-base sm:text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-blue-800 transform transition hover:-translate-y-1 duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;


// import { useNavigate, useParams } from "react-router-dom";
// import { useGetFacilityDetailsQuery } from "../../redux/api/facility/facilityApi";
// import Loading from "../shared/Loading";

// import {
//   FaMapMarkerAlt,
//   FaCalendarAlt,

//   FaStar,
//   FaUserCircle,

//   FaParking,
//   FaDoorOpen,
//   FaTools,
//   FaUserShield,
// } from "react-icons/fa";

// const FacilityDetails = () => {
//   const { id } = useParams();
//   const { data, isLoading } = useGetFacilityDetailsQuery(id);
//   const navigate = useNavigate();

//   const facility = data?.data[0];

//   const handleNavigate = (id: string) => {
//     navigate(`/booking/${id}`);
//   };

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <div className="dark:bg-gray-900 bg-gray-100 min-h-screen">
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[450px] md:h-[600px] overflow-hidden"
//         data-aos="fade-up"
//       >
//         <img
//           src={facility.image}
//           alt={facility.name}
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
//         <div className="absolute bottom-0 left-0 w-full p-6 text-white">
//           <h1
//             className="text-5xl font-extrabold mb-3"
//             data-aos="fade-right"
//             data-aos-delay="100"
//           >
//             {facility.name}
//           </h1>
//           <p
//             className="text-xl font-semibold mb-2"
//             data-aos="fade-right"
//             data-aos-delay="200"
//           >
//             <FaMapMarkerAlt className="inline mr-2" />
//             {facility.location}
//           </p>
//           <p
//             className="text-lg"
//             data-aos="fade-right"
//             data-aos-delay="300"
//           >
//             <FaCalendarAlt className="inline mr-2" />
//             Available: <span className="text-green-400">Yes</span>
//           </p>
//           <p
//             className="text-3xl mt-3"
//             data-aos="fade-right"
//             data-aos-delay="400"
//           >
//             <span className="text-yellow-400">${facility.pricePerHour}</span>{" "}
//             / hour
//           </p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto py-12 px-4">
//         <div
//           className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-8"
//           data-aos="zoom-in"
//         >
//           {/* Description */}
//           <section>
//             <h2 className="text-3xl font-bold mb-4">Description</h2>
//             <p className="text-lg leading-relaxed">{facility.description}</p>
//           </section>

//           {/* Features */}
//           <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
//               <h3 className="text-xl font-semibold font-title text-hero">
//                 Features
//               </h3>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
//                 <li className="flex items-center gap-3 text-green-600 font-primary">
//                   <FaParking className="text-2xl text-green-500" /> Parking
//                   Available
//                 </li>
//                 <li className="flex items-center gap-3 text-green-600 font-primary">
//                   <FaDoorOpen className="text-2xl text-green-500" /> Changing
//                   Rooms
//                 </li>
//                 <li className="flex items-center gap-3 text-green-600 font-primary">
//                   <FaTools className="text-2xl text-green-500" /> Equipment
//                   Rental
//                 </li>
//                 <li className="flex items-center gap-3 text-green-600 font-primary">
//                   <FaUserShield className="text-2xl text-green-500" /> Online
//                   Booking
//                 </li>
//               </ul>
//             </div>

//           {/* Book Now Button */}
//           <div className="text-center">
//             <button
//               onClick={() => handleNavigate(facility._id)}
//               className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
//               data-aos="fade-up"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>

//         {/* Customer Reviews */}
//         <section className="mt-16" data-aos="fade-up">
//           <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { name: "John Doe", review: "Excellent facilities and great staff!" },
//               { name: "Jane Smith", review: "Loved the ambiance and services provided!" },
//               { name: "Mike Johnson", review: "Highly recommended for sports enthusiasts." },
//             ].map((review, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transform transition duration-300"
//                 data-aos="zoom-in"
//               >
//                 <FaUserCircle className="text-4xl text-blue-500 mb-4" />
//                 <h3 className="text-xl font-semibold">{review.name}</h3>
//                 <p className="text-lg text-gray-700 dark:text-white">
//                   {review.review}
//                 </p>
//                 <div className="flex gap-1 mt-3 text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Similar Facilities */}
//         <section className="mt-16" data-aos="fade-up">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Explore Similar Facilities
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((_, index) => (
//               <div
//                 key={index}
//                 className="relative bg-gray-300 h-[250px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
//                 data-aos="fade-up"
//               >
//                 <img
//                   src={`https://source.unsplash.com/random/400x400?facility-${index}`}
//                   alt="Similar Facility"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
//                   <h3 className="text-lg font-bold">Facility Name</h3>
//                   <p className="text-sm">$50 / hour</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FacilityDetails;
