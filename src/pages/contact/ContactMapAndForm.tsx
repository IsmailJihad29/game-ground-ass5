import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const ContactMapAndForm = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20 sm:py-16">
      <div className="container mx-auto px-6 lg:px-12 sm:px-4">
        {/* Section Heading */}
        <div className="text-center mb-12"  data-aos="fade-up"
          data-aos-delay="300">
          <h1 className="text-title">
            Get in Touch
          </h1>
          <p className="text-subtitle">
            We'd love to hear from you! Reach out to us for any inquiries or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="relative"  data-aos="fade-right"
          data-aos-delay="400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2341322716044!2d90.35345081445533!3d23.82234838455019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c139deb7b7d5%3A0x7d56d411689ba57!2sMirpur%20Shopping%20Centre!5e0!3m2!1sen!2sbd!4v1644311096102!5m2!1sen!2sbd"
              className="w-full h-[400px] rounded-2xl shadow-lg transition-transform duration-300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-4"  data-aos="fade-left"
          data-aos-delay="500">
            {/* Phone Info */}
            <div className="flex items-center space-x-6 ">
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white">
                <PhoneOutlined className="text-3xl" />
              </div>
              <div>
                <p className="font-title text-hero text-xl">Phone</p>
                <p className="text-gray-700 dark:text-white font-primary text-lg">+8801878850591</p>
              </div>
            </div>

            {/* Email Info */}
            <div className="flex items-center space-x-6">
              <div className="p-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 text-white">
                <MailOutlined className="text-3xl" />
              </div>
              <div>
                <p className="font-title text-hero text-xl">Email</p>
                <p className="text-gray-700 dark:text-white font-primary text-lg">support@domain.com</p>
              </div>
            </div>

            {/* Address Info */}
            <div className="flex items-center space-x-6">
              <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
                <HomeOutlined className="text-3xl" />
              </div>
              <div>
                <p className="font-title text-hero text-xl">Address</p>
                <p className="text-gray-700 dark:text-white font-primary text-lg">
                  456 Elm Street,  City, Country 12345
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6">
              <h3 className="font-title text-hero text-xl">
                Business Hours
              </h3>
              <p className="text-gray-700 dark:text-white font-primary text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-700 dark:text-white font-primary text-sm">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-700 dark:text-white font-primary text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMapAndForm;
