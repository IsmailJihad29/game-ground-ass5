
import heroImg from "../assets/heroImg.jpg";
import { FaFutbol, FaBasketballBall, FaTableTennis, FaSwimmer, FaRunning, FaVolleyballBall } from "react-icons/fa"; // 6 icons
import { useNavigate } from "react-router-dom"; // For navigation

const Hero = () => {
  const navigate = useNavigate(); // Use the navigate hook from react-router-dom



  return (
    <div
  className="bg-cover bg-center h-[90vh] flex flex-col items-center justify-center text-white relative px-4 md:px-8 lg:px-12"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg})`, // Replace with your image URL
  }}
>
  {/* Welcome Message */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-hero mb-2 text-hero uppercase text-center">
    Welcome to GameGround!
  </h2>

  {/* Main Heading */}
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-primary text-primary text-center">
    "Where Every Game Comes Alive!"
  </h1>

  {/* Short Description */}
  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-2 text-primary font-primary text-center">
    Discover top-notch sports facilities and book your slot with ease!
  </p>

  {/* Facilities Section */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 text-center font-primary text-[#fff0d4] w-full md:w-3/4 lg:w-2/3 mx-auto">
    {/* Facility 1 */}
    <div className="flex items-center justify-center">
      <FaFutbol className="text-3xl sm:text-4xl text-indigo-400 mr-3" />
      <span className="text-sm sm:text-lg font-semibold">Football Ground</span>
    </div>

    {/* Facility 2 */}
    <div className="flex items-center justify-center">
      <FaBasketballBall className="text-3xl sm:text-4xl text-indigo-400 mr-3" />
      <span className="text-sm sm:text-lg font-semibold">Basketball Court</span>
    </div>

    {/* Facility 3 */}
    <div className="flex items-center justify-center">
      <FaTableTennis className="text-3xl sm:text-4xl text-indigo-400 mr-3" />
      <span className="text-sm sm:text-lg font-semibold">Table Tennis</span>
    </div>

    {/* Facility 4 */}
    <div className="flex items-center justify-center">
      <FaSwimmer className="text-3xl sm:text-4xl text-indigo-400 mr-3" />
      <span className="text-sm sm:text-lg font-semibold">Swimming Pool</span>
    </div>

    {/* Facility 5 */}
    <div className="flex items-center justify-center">
      <FaRunning className="text-3xl sm:text-4xl text-indigo-400 mr-3" />
      <span className="text-sm sm:text-lg font-semibold">Athletics Track</span>
    </div>

    {/* Facility 6 */}
    <div className="flex items-center justify-center">
      <FaVolleyballBall className="text-3xl sm:text-4xl text-indigo-400 mr-3" />
      <span className="text-sm sm:text-lg font-semibold">Volleyball Court</span>
    </div>
  </div>

  {/* Ripple Button */}
  <button
    onClick={() => navigate("/facility-listing")}
    className="button-primary"
  >
    Book Now
    <span className="absolute inset-0 rounded-md bg-white bg-opacity-20 pointer-events-none"></span>
  </button>
</div>
  );
};

export default Hero;


