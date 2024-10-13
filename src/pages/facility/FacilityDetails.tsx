

import { useNavigate, useParams } from "react-router-dom";
import { useGetFacilityDetailsQuery } from "../../redux/api/facility/facilityApi";
import Loading from "../../shared/Loading";

import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFacilityDetailsQuery(id);
  const navigate = useNavigate();

  const facility = data?.data[0];

  const handleNavigate = (id: string) => {
    navigate(`/booking/${id}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="dark:bg-slate-600 bg-slate-50 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg rounded-xl overflow-hidden transition transform duration-300">
          
          {/* Hero Section */}
          <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-t-xl">
            <img
              className="w-full h-full object-cover rounded-t-xl"
              src={facility.image }
              alt={facility.name}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            
            {/* Facility Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col md:flex-row justify-between items-end text-white">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold font-title text-hero mb-2 transform transition-all duration-300 hover:scale-105">
                  {facility.name}
                </h1>
                <p className="text-2xl font-semibold text-yellow-300 font-primary">
                  ${facility.pricePerHour} / hour
                </p>
              </div>
              <div className="text-right space-y-2">
                <h2 className="text-lg font-semibold flex items-center gap-2 font-primary">
                  <FaMapMarkerAlt /> {facility.location}
                </h2>
                <h3 className="text-lg font-semibold flex items-center gap-2 font-primary">
                  <FaCalendarAlt /> Available: <span className="text-green-400">Yes</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Facility Description & Booking Section */}
          <div className="p-8 space-y-10">
            
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold  font-title text-hero">Description</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-primary">
                {facility.description}
              </p>
            </div>

            {/* Facility Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-title text-hero">Features</h3>
              <ul className="flex flex-wrap gap-6 text-lg">
                <li className="flex items-center gap-2 text-green-600">
                  <FaCheckCircle /> Parking Available
                </li>
                <li className="flex items-center gap-2 text-green-600 font-primary">
                  <FaCheckCircle /> Changing Rooms
                </li>
                <li className="flex items-center gap-2 text-green-600 font-primary">
                  <FaCheckCircle /> Equipment Rental
                </li>
                <li className="flex items-center gap-2 text-green-600 font-primary">
                  <FaCheckCircle /> Online Booking
                </li>
              </ul>
            </div>

            {/* Book Now Button */}
            <div className="flex justify-center">
              <button
                onClick={() => handleNavigate(facility._id)}
                className="px-8 font-title py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-blue-800 transform transition hover:-translate-y-1 duration-300"
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
