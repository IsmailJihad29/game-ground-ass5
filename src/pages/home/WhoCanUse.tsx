import amateurPlayer from "../../assets/Amateur-Players.png";
import sportsTeamAndClub from "../../assets/Sports-Teams&Clubs.png";
import eventOrganization from "../../assets/Event-Organizers.png";
import schoolAndCollage from "../../assets/school.png";
import corporationTeam from "../../assets/team.png";
import friendsAndFamily from "../../assets/friends.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import SectionDevider from "../shared/SectionDevider";

const whoCanUseData = [
  {
    image: amateurPlayer,
    name: "Amateur Player",
    title: "Your passion, our pitch—play the game you love, anytime!",
  },
  {
    image: sportsTeamAndClub,
    name: "Sports Teams & Clubs",
    title: "Power your practice or tournament with the perfect venue.",
  },
  {
    image: eventOrganization,
    name: "Event Organizers",
    title:
      "Host unforgettable sports events with ease, tailored to your needs.",
  },
  {
    image: schoolAndCollage,
    name: "Schools & Colleges",
    title:
      "Expand your horizons with top-notch sports facilities for students.",
  },
  {
    image: corporationTeam,
    name: "Corporate Teams",
    title: "Build stronger teams with fun and competitive sports days!",
  },
  {
    image: friendsAndFamily,
    name: "Friends & Families",
    title: "Create lasting memories—book a pitch for a day of fun and bonding.",
  },
];

const WhoCanUse = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-white  dark:bg-gray-900 py-10  ">
      
      <div className="container mx-auto px-6 lg:px-20 mb-20">
        {/* Header */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-title">Unlock Your Game Potential!</h3>
          <p className="text-subtitle">
            No matter who you are, GameGround is your go-to platform for
            seamless sports facility booking!
          </p>
        </div>

        {/* User Types Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-20 w-[70%] md:w-full md:gap-5  mx-auto">
          {whoCanUseData.map((item, index) => (
           
            <div
              key={index}
              className="relative flex flex-col items-center   hover:scale-105 hover:shadow-neutral-300 dark:hover:scale-110 dark:hover:shadow-xl  bg-white dark:bg-gray-800 rounded-2xl shadow-lg  text-center  group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{
                borderBottom: "4px solid transparent",
                borderImage: "linear-gradient(to right, #42A5F5, #66BB6A)",
                borderImageSlice: 1,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Overlap */}
              <div className="relative -mt-12 w-24 h-24 bg-white rounded-lg shadow-md border-4 border-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold font-title text-hero dark:text-white mb-2">
                  {item.name}
                </h4>
                <p className="text-sm font-primary text-neutral-600 dark:text-neutral-300">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <SectionDevider/>
    </div>
  );
};

export default WhoCanUse;
