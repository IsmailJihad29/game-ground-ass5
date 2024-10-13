// import { ClockCircleOutlined } from "@ant-design/icons";
// import { Timeline } from "antd";

// const AboutHistoryAndMilestones = () => {
//   const timeLineOptions = [
//     {
//       children: (
//         <span className="text-lightBlue dark:text-teal-400 px-4">
//           2022: Conception
//         </span>
//       ),
//       dot: (
//         <ClockCircleOutlined
//           style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
//         />
//       ),
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           The idea for the platform was born from a need for easier access to
//           sports facilities.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Development began with a focus on user-friendly booking features.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-lightBlue dark:text-teal-400">
//           2023: Official Launch
//         </span>
//       ),
//       dot: (
//         <ClockCircleOutlined
//           style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
//         />
//       ),
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Launched the platform, enabling users to book football and cricket
//           pitches online.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Partnered with local sports venues, attracting early users with
//           seamless booking.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-lightBlue px-4 dark:text-teal-400">
//           2024: Expanded Sports
//         </span>
//       ),
//       dot: (
//         <ClockCircleOutlined
//           style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
//         />
//       ),
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Added more sports facilities like badminton, basketball, and tennis.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Launched a review system and expanded partnerships across different
//           regions.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-lightBlue dark:text-teal-300">Future Goals:</span>
//       ),
//       color: "red",
//     },
//     {
//       children: (
//         <span className="text-lightBlue px-4 dark:text-teal-400">
//           2025: Mobile App Release
//         </span>
//       ),
//       dot: (
//         <ClockCircleOutlined
//           style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
//         />
//       ),
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Introduced a mobile app for easy, on-the-go bookings.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Increased user engagement significantly, making the app a preferred
//           booking method.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-lightBlue px-4 dark:text-teal-400">
//           2025: Community Engagement
//         </span>
//       ),
//       dot: (
//         <ClockCircleOutlined
//           style={{ fontSize: "20px", padding: "2px 4px", color: "#007bff" }} // Customized icon color
//         />
//       ),
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Organized local sports tournaments and partnered with schools for
//           youth engagement.
//         </span>
//       ),
//       color: "green",
//     },
//     {
//       children: (
//         <span className="text-veryDarkViolet dark:text-teal-100">
//           Introduced discounts on sports gear through collaborations with local
//           brands.
//         </span>
//       ),
//       color: "green",
//     },
//   ];
//   return (
//     <div className="dark:bg-slate-500">
//       <div className="py-16 container mx-auto">
//         <div className="mb-16">
//           <h3 className="heading-title">History & Milestones</h3>
//           <p className="heading-p px-20">
//             Over the years, we’ve grown from a small project into a thriving
//             platform, connecting players with the best sports facilities in
//             their area.
//           </p>
//         </div>

//         {/* Timeline design */}
//         <div>
//           <Timeline mode="alternate" items={timeLineOptions} className="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutHistoryAndMilestones;
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const AboutHistoryAndMilestones = () => {
  const timeLineOptions = [
    {
      children: (
        <span className="text-primaryLight dark:text-primaryDark px-4">
          2022: Vision and Ideation
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#00b0ff" }}
        />
      ),
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          The idea to revolutionize sports booking by integrating technology with
          real-time availability was born.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Initial research into user needs highlighted a lack of easy access to
          available sports venues and activities.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-primaryLight dark:text-primaryDark">
          2023: Beta Launch
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#00b0ff" }}
        />
      ),
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Successfully launched a beta version with real-time booking for football
          and cricket pitches in select cities.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Grew a loyal user base through word-of-mouth and partnered with local
          community sports clubs.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-primaryLight dark:text-primaryDark px-4">
          2024: AI-Powered Recommendations
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#00b0ff" }}
        />
      ),
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Introduced AI-based recommendations for users, helping them discover new
          sports venues and activities based on preferences and past bookings.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Partnered with fitness experts to introduce wellness programs and
          community events within the platform.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-primaryLight dark:text-primaryDark">2025: Future Goals</span>
      ),
      color: "red",
    },
    {
      children: (
        <span className="text-primaryLight px-4 dark:text-primaryDark">
          2025: Global Expansion
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#00b0ff" }}
        />
      ),
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Expand the platform to international markets, starting with Europe and
          Asia, and offer multi-language support.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Build strategic partnerships with international sports venues and
          federations to grow the global user base.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-primaryLight px-4 dark:text-primaryDark">
          2026: Advanced Community Engagement
        </span>
      ),
      dot: (
        <ClockCircleOutlined
          style={{ fontSize: "20px", padding: "2px 4px", color: "#00b0ff" }}
        />
      ),
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Launch a community hub feature, allowing users to create and join sports
          leagues, organize tournaments, and host events.
        </span>
      ),
      color: "green",
    },
    {
      children: (
        <span className="text-textDark dark:text-textLight">
          Introduce social features like live scores, leaderboards, and match
          highlights to increase user engagement.
        </span>
      ),
      color: "green",
    },
  ];
  

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  dark:text-gray-100 font-hero text-hero">
            Our Journey
          </h2>
          <p className="mt-4 text-lg  dark:text-gray-300 font-primary text-title">
            Discover how we grew from an idea to a leading platform connecting
            people with the best sports facilities.
          </p>
        </div>

        <Timeline
          mode="alternate"
          items={timeLineOptions}
          className="custom-timeline font-primary"
        />

        {/* Custom CSS for improved responsiveness */}
        <style jsx>{`
          .custom-timeline {
            padding: 0 1rem;
          }

          @media (min-width: 768px) {
            .custom-timeline {
              padding: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AboutHistoryAndMilestones;
