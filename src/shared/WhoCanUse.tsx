
import amateurPlayer from "../assets/Amateur-Players.png";
import sportsTeamAndClub from "../assets/Sports-Teams&Clubs.png";
import eventOrganization from "../assets/Event-Organizers.png";
import schoolAndCollage from "../assets/school.png";
import corporationTeam from "../assets/team.png";
import friendsAndFamily from "../assets/friends.png";

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
    title: "Host unforgettable sports events with ease, tailored to your needs.",
  },
  {
    image: schoolAndCollage,
    name: "Schools & Colleges",
    title: "Expand your horizons with top-notch sports facilities for students.",
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
  return (
    <div className="bg-slate-50 dark:bg-slate-700 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold font-hero text-hero dark:text-white">
            Unlock Your Game Potential!
          </h3>
          <p className="mt-4 text-lg text-neutral-600 dark:text-primary font-primary max-w-2xl mx-auto">
            No matter who you are, GameGround is your go-to platform for seamless sports facility booking!
          </p>
        </div>

        {/* User Types Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          {whoCanUseData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-slate-600 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <img
                className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-teal-600 dark:border-teal-400 transition-transform duration-300 transform hover:scale-110"
                src={item.image}
                alt={item.name}
              />
              {/* Name */}
              <h4 className="text-xl font-semibold font-title dark:text-white">
                {item.name}
              </h4>
              {/* Title */}
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {item.title}
              </p>
              {/* Decorative Element */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg hover:border-teal-600 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoCanUse;








