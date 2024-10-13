
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import contactHeroImage from '../../assets/contactUs.jpg'; // Replace with your actual image path

const ContactHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[85vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${contactHeroImage})`,
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70"></div>

      <div className="relative z-10 text-center p-4">
        {/* Title with animation */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in font-hero text-title">
          We're Here to Help
        </h1>
        {/* Tagline with animation */}
        <p className="text-lg md:text-2xl mb-6 animate-fade-in-delayed font-primary">
          Have any questions or need assistance? Reach out to us, and we'll be happy to support you!
        </p>

        {/* Call-to-action buttons */}
        <div className="flex justify-center gap-4 mt-4 animate-slide-in">
          <button className="flex items-center bg-lightBlue hover:bg-strongCyan text-white py-2 px-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <FaEnvelope className="mr-2" />
            Send an Email
          </button>
          <button className="flex items-center bg-transparent border border-lightBlue hover:bg-lightBlue text-white py-2 px-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <FaPhoneAlt className="mr-2" />
            Call Us Now
          </button>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 m-4 w-32 h-32 bg-transparent border-4 border-strongCyan rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-0 left-0 m-4 w-20 h-20 bg-lightBlue rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-0 right-0 m-6 w-16 h-16 bg-strongCyan rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default ContactHero;
