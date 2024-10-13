
import circle from "../../assets/circle.svg";
import grid from "../../assets/grid.svg";
import logo from "../../assets/logo.png";

type TTeamData = {
  name: string;
  position: string;
  about: string;
  photo: string;
};

const AboutTeamSection = () => {
  const teamData: TTeamData[] = [
    {
      name: "Ismail Hossen Jihad",
      position: "Founder & CEO",
      about:
        "A visionary leader committed to revolutionizing the sports booking experience through innovative technology and unwavering dedication.",
      photo: 'https://i.ibb.co.com/g3FDnkM/FB-IMG-1713718624554.jpg',
    },
    {
      name: "Rohit Ahmed",
      position: "COO",
      about:
        "A strategic thinker focused on optimizing operations and enhancing user satisfaction.",
      photo:
        "https://i.ibb.co.com/0thFhYQ/1695301783645.jpg",
    },    
    {
      name: "Rahim Khan",
      position: "CTO",
      about:
        "Driving innovation and ensuring our platform remains user-friendly and secure.",
      photo:
        "https://i.ibb.co.com/hHHdPCW/images.jpg",
    },
    {
      name: "Nina Begum",
      position: "Marketing Director",
      about:
        "Crafting creative strategies to expand our community and enhance brand visibility.",
      photo:
        "https://i.ibb.co.com/qB958tG/1623677348445.jpg",
    },
    {
      name: "Markus Hossain",
      position: "Customer Support Lead",
      about:
        "Dedicated to ensuring customer satisfaction through exceptional support and engagement.",
      photo:
        "https://i.ibb.co.com/RPdL4RR/Max-R-Headshot-1.jpg",
    },
  ];

  return (
    <div className="dark:bg-slate-600 bg-slate-100">
      <div className="container mx-auto py-16">
        <div className="mb-16 text-center">
          <h3 className="heading-title text-3xl font-bold text-darkViolet font-hero text-hero">Meet Our Visionary Team</h3>
          <p className="heading-p px-20 text-gray-700 font-primary">
            Our dedicated team blends expertise in sports and technology to create a seamless booking experience for everyone.
          </p>
        </div>

        {/* New Section */}
        <div>
          <div className="flex flex-row mx-auto flex-wrap justify-center items-center gap-8">
            {teamData.map((item: TTeamData, index: number) => (
              <div
                key={index}
                className="w-[270px] relative transform transition duration-300 hover:scale-105"
              >
                <div className="group relative overflow-hidden w-[270px] h-[350px] bg-slate-300 rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:rotate-1 hover:-translate-y-2">
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    src={item.photo ? item.photo : logo}
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white rounded-t-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-bold text-center text-darkViolet text-xl font-primary text-title">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-center font-title text-hero">
                      {item.position}
                    </p>
                    <p className="text-center py-4 px-6 text-lightBlue dark:text-strongCyan font-primary text-title">
                      {item.about.length > 50
                        ? `${item.about.substring(0, 50)}...`
                        : item.about}
                    </p>
                  </div>

                  {/* Decorative Icons */}
                  <img
                    className="absolute -left-10 -bottom-10 transform scale-75 opacity-50"
                    src={circle}
                    alt="circle"
                  />
                  <img
                    className="absolute -right-2 -top-4 w-9 opacity-50"
                    src={grid}
                    alt="grid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeamSection;
