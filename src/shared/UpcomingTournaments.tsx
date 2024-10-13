import logo from "../assets/logo.png"; // Example image import
import { useNavigate } from "react-router-dom";

interface Tournament {
  id: string;
  name: string;
  date: string;
  venue: string;
  image?: string;
}






const UpcomingTournaments = () => {
  const navigate = useNavigate();
  const tournaments: Tournament[] = [
    {
      id: "1",
      name: "Local Tennis Championship",
      date: "Oct 25, 2024",
      venue: "City Arena",
      image: "https://i.ibb.co.com/M1dBVV2/tenis.png",
    },
    {
      id: "2",
      name: "Basketball 3v3 Tournament",
      date: "Nov 5, 2024",
      venue: "Downtown Court",
      image: "https://i.ibb.co.com/jMpfQqH/basketball.png",
    },
    {
      id: "3",
      name: "Football Mini League",
      date: "Nov 20, 2024",
      venue: "Central Field",
      image: "https://i.ibb.co.com/5vzTPGK/football2.png",
    },
    {
      id: "4",
      name: "Cricket Club Challenge",
      date: "Dec 1, 2024",
      venue: "National Stadium",
      image: "https://i.ibb.co.com/y5vtgDq/DALL-E-2024-10-11-23-41-10-A-minimal-logo-style-banner-for-a-cricket-tournament-The-scene-shows-a-cr.webp",
    },
  ];

  return (
    <div className="dark:bg-neutral-800 bg-gray-300 ">
      <div className="container py-16 mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center w-1/2 mx-auto">
          <h3 className="text-4xl font-bold font-hero text-hero dark:text-white mb-4">
            Exciting Upcoming Tournaments
          </h3>
          <p className="text-lg text-gray-600 font-primary dark:text-gray-300 px-6 lg:px-20">
            Stay updated with the most anticipated sports tournaments around you. 
            Whether you're looking to compete or just watch, find all the information 
            about the latest events right here.
          </p>
        </div>

        {/* Tournaments Cards */}
        <div className="flex items-center justify-center mb-16 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tournaments.map((tournament) => (
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 text-center">
              {/* Card Image */}
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={tournament?.image ? tournament.image : logo}
                  alt={tournament.name}
                />
              </div>
            
              {/* Title (Visible by default) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary font-title z-10 transition-opacity duration-500 group-hover:opacity-0">
                  {tournament.name}
                </h1>
              </div>
            
              {/* Overlay and Details (Visible on hover) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-bold text-hero font-title  opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {tournament.name}
                </h1>
                <p className="mb-4 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {tournament.date} - {tournament.venue}
                </p>
                <button
                  onClick={() => navigate(`/facility-listing`)}
                  className="rounded-full bg-teal-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  View Details
                </button>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTournaments;
