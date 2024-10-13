import { FaHandsHelping, FaGlobe, FaTrophy } from 'react-icons/fa';

const MissionStatementSection = () => {
  return (
    <div className="bg-[#d1dbe4] py-28 px-6 lg:px-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-hero text-hero">Our Mission</h2>
        <p className=" font-primary text-primary text-lg lg:text-xl mb-12">
          We strive to create a platform where everyone can easily find and book the best sports facilities,
          fostering a sense of community, wellness, and competition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Purpose */}
          <div className="flex flex-col items-center">
            <FaGlobe className="text-6xl mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2 font-title text-hero">Purpose</h3>
            <p className="text-center font-primary text-primary">
              To provide a seamless experience that connects sports enthusiasts with premium facilities.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center">
            <FaHandsHelping className="text-6xl mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2 font-title text-hero">Values</h3>
            <p className="text-center font-primary text-primary">
              Integrity, inclusivity, and a passion for fostering sportsmanship and community growth.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center">
            <FaTrophy className="text-6xl mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2 font-title text-hero">Vision</h3>
            <p className="text-center font-primary text-primary">
              To become the leading platform for sports facility bookings globally, promoting active lifestyles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatementSection;
