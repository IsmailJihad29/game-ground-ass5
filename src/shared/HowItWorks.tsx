import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";
import step6 from "../assets/step6.png";
import step7 from "../assets/step7.png";


const HowItWorks = () => {
  return (
    <div className="dark:bg-slate-600 bg-slate-100 px-10">
      <div className="container mx-auto py-16 px-8">
        {/* Updated Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold font-hero text-hero  dark:text-white mb-4">
            Booking Made Easy
          </h2>
          <p className="text-lg font-primary text-gray-600 dark:text-gray-300 px-4">
            Learn how to book sports facilities with our simple, step-by-step
            guide in the 'How It Works' section.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-32">
          {/* Step 1 */}
          <div className="py-4 lg:px-16 flex flex-row-reverse">
            <img src={step1} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 1: Explore Options
              </h4>
              <p className="p-2 text-darkGrayishBlue dark:text-grayishBlue font-primary">
                For a clear view of all available options, click on the image to
                explore and compare facilities. Find the perfect venue for your
                game with ease.
              </p>
            </div>
          </div>

          <div className="hidden lg:block"></div>

          {/* Step 2 */}
          <div className="relative hidden lg:block">
            <div className="flex justify-end items-end absolute -top-32 -right-20">
              <svg
                className="dash-border"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "65px" }}
              >
                <path
                  d="M1.72656 1.86328C1.72656 100.386 81.5642 180.193 180.125 180.193"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex py-4 lg:px-16">
            <img src={step2} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 2: Select Facility
              </h4>
              <p className="p-2 text-darkGrayishBlue dark:text-grayishBlue font-primary">
                Click on the facility of your choice to view details and
                available booking options. Select the perfect venue for your
                game.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex py-4 lg:px-16 flex-row-reverse">
            <img src={step3} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 3: Book Now
              </h4>
              <p className="p-2 text-darkGrayishBlue dark:text-grayishBlue font-primary">
                Ready to secure your spot? Click 'Book Now' to confirm your
                reservation and get ready for your game!
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="flex justify-end items-end absolute -top-32 -left-20">
              <svg
                className="dash-border"
                width="182"
                height="181"
                viewBox="0 0 182 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ right: "65px" }}
              >
                <path
                  d="M180.273 1.42188C180.273 99.9447 100.436 179.752 1.875 179.752"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="flex justify-end items-end absolute -top-32 -right-20">
              <svg
                className="dash-border"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "65px" }}
              >
                <path
                  d="M1.72656 1.86328C1.72656 100.386 81.5642 180.193 180.125 180.193"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex py-4 lg:px-16">
            <img src={step4} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 4: Proceed to Payment
              </h4>
              <p className="p-2 text-darkGrayishBlue dark:text-grayishBlue font-primary">
                Once you've confirmed availability, click 'Proceed to Payment'
                to complete your booking. Follow the prompts to finalize your
                reservation and make the payment securely.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex py-4 lg:px-16 flex-row-reverse">
            <img src={step5} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 5: Enter Payment Details
              </h4>
              <p className="p-2 text-darkGrayishBlue dark:text-grayishBlue font-primary">
                Enter your payment details to finalize the booking. Ensure all
                information is accurate for a smooth transaction. Once
                completed,
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="flex justify-end items-end absolute -top-32 -left-20">
              <svg
                className="dash-border"
                width="182"
                height="181"
                viewBox="0 0 182 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ right: "65px" }}
              >
                <path
                  d="M180.273 1.42188C180.273 99.9447 100.436 179.752 1.875 179.752"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="flex justify-end items-end absolute -top-32 -right-20">
              <svg
                className="dash-border"
                width="182"
                height="182"
                viewBox="0 0 182 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "65px" }}
              >
                <path
                  d="M1.72656 1.86328C1.72656 100.386 81.5642 180.193 180.125 180.193"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex py-4 lg:px-16">
            <img src={step6} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
                Step 6: Booking Confirmation
              </h4>
              <p className="p-2 text-darkGrayishBlue dark:text-grayishBlue font-primary">
                Payment successful! Your booking is confirmed. Check your email
                for details and enjoy your facility!
              </p>
            </div>
          </div>
          {/* enjoy */}
          <div className="flex py-4 lg:px-16 flex-row-reverse">
            <img src={step7} className="size-28" alt="" />
            <div className="ml-4">
              <h4 className="text-xl font-semibold font-title text-hero">
              Enjoy Your Game
              </h4>
              <p className="p-2 text-darkGrayishBlue dark:text-grayishBlue font-primary">
              Everything is set! Grab your gear and head to the facility. Have a great time playing and enjoy the game!
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="flex justify-end items-end absolute -top-32 -left-20">
              <svg
                className="dash-border"
                width="182"
                height="181"
                viewBox="0 0 182 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ right: "65px" }}
              >
                <path
                  d="M180.273 1.42188C180.273 99.9447 100.436 179.752 1.875 179.752"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeMiterlimit="22.9256"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
