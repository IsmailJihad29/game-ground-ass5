import { useGetAllFacilityQuery } from "../redux/api/facility/facilityApi";
import stadium from "../assets/stadium.jpg";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

interface TFacilities {
  index: number;
  _id: string;
  image: string;
  name: string;
  description: string;
  location: string;
  pricePerHour: number;
}

const FeaturedFacilities = () => {
  const navigate = useNavigate();
  const {
    data: facilities,
    isLoading,
    isError,
  } = useGetAllFacilityQuery({
    page: 1,
    limit: 4,
    isDeleted: false,
  });

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 py-10 px-5 ">
      <div className="container py-16 mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-hero dark:text-white font-hero">
            Top Featured Facilities
          </h3>
          <p className="text-lg text-neutral-600 dark:text-primary max-w-2xl mx-auto mt-4 font-primary">
            Explore our top-rated sports venues with a handpicked selection of
            popular facilities. Each facility is showcased with high-quality
            images, names, and a brief description to help you find the perfect
            location for your next game.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {facilities?.data?.map((item: TFacilities) => (
            <div
              key={item._id}
              className="group relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
            >
              {/* Facility Image */}
              <div className="relative h-72 w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item?.image ? item?.image : stadium}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Facility Content */}
              <div className="absolute bottom-0 p-6 w-full text-center">
                <h1 className="text-2xl font-semibold text-white font-title uppercase tracking-wide mb-2">
                  {item.name}
                </h1>
                <p className="text-sm text-primary font-primary font-semibold opacity-90 mb-4">
                  {item.description.length > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </p>
                <p className="text-teal-400 text-xl font-primary font-bold mb-4">
                  $ {item.pricePerHour} / Hour
                </p>
                <button
                  onClick={() => navigate(`/facility-listing/${item._id}`)}
                  className="bg-teal-500 hover:bg-teal-600 py-2 px-5 text-sm font-semibold text-white rounded-full transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedFacilities;




