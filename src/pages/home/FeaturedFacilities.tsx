import { useGetAllFacilityQuery } from "../../redux/api/facility/facilityApi";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Loading from "../shared/Loading";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-8 px-5">
      <div className="container py-16 mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h3 className="text-title" data-aos="fade-up">
            Top Featured Facilities
          </h3>
          <p
            className="text-sm md:text-base lg:text-lg text-gray-700 mt-4 font-primary dark:text-white max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our top-rated sports venues with a handpicked selection of
            popular facilities. Each facility is showcased with high-quality
            images, names, and a brief description to help you find the perfect
            location for your next game.
          </p>
        </div>

        {/* Facilities Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {facilities?.data?.map((item: TFacilities) => (
            <div
              key={item._id}
              className="group relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 bg-gray-100 dark:bg-neutral-700"
              data-aos="zoom-in"
            >
              {/* Facility Image */}
              <div className="relative h-72 w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item?.image ? item?.image : logo}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Facility Content */}
              <div className="absolute bottom-0 p-6 w-full text-center text-white">
                <h1 className="text-2xl font-semibold font-title uppercase tracking-wide mb-2">
                  {item.name}
                </h1>
                <p className="text-sm font-primary font-semibold opacity-90 mb-4">
                  {item.description.length > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </p>
                <p className="text-xl font-primary font-bold mb-4">
                  $ {item.pricePerHour} / Hour
                </p>
                <button
                  onClick={() => navigate(`/facility-listing/${item._id}`)}
                  className="button-secondary"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <button className="mt-4 button-primary">See More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFacilities;
