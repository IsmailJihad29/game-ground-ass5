import "./App.css";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;




// import changingRoom from "../assets/hero/changing-room.png";
// import snacks from "../assets/hero/food.png";
// import field from "../assets/hero/field.png";
// import equpment from "../assets/hero/sports-equpment.png";
// import locker from "../assets/hero/first-aid-kit.png";
// import firstAid from "../assets/hero/school-locker.png"


{/* Highlighted Features */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {[
              { img: field, label: "Sports Field" },
              { img: equpment, label: "Sports Equipment" },
              { img: changingRoom, label: "Changing Room" },
              { img: snacks, label: "Snacks" },
              { img: locker, label: "Locker" },
              { img: firstAid, label: "First Aid Equpment" },
            ].map(({ img, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center  p-1 rounded-lg shadow-md transform hover:scale-105 transition-transform"
              >
                <img src={img} alt={label} className="w-16 h-16 mb-2" />
                <span className="text-sm md:text-md font-semibold text-gray-700">
                  {label}
                </span>
              </div>
            ))}
          </div> */}