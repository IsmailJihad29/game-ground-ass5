
const CommunityEngagement = () => {
  const events = [
    { name: "Free Sports Camp", date: "August 2023", description: "Organized a free sports camp for underprivileged children to encourage physical activity." },
    { name: "Local Sports Day", date: "October 2023", description: "Sponsored a local sports day, bringing together athletes from various communities." },
    { name: "Online Webinars", date: "Ongoing", description: "Hosting monthly webinars to educate the community about sports health and fitness." },
    { name: "Charity Fundraiser", date: "December 2023", description: "Conducting a charity fundraiser to support local sports initiatives." },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 font-hero text-hero">Community Engagement</h2>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-darkViolet font-title text-title">{event.name}</h3>
              <p className="text-gray-500 font-primary">{event.date}</p>
              <p className="text-gray-600 font-primary">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagement;
