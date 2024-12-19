import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import faQuestion from "../../assets/contact/Questions-pana.png";

const FAQuestions = () => {
  const { Panel } = Collapse;

  const faqs = [
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team by filling out the contact form on this page or by emailing us at support@domain.com.",
    },
    {
      question: "What are your customer support hours?",
      answer:
        "Our customer support team is available from Monday to Friday, 9:00 AM to 6:00 PM (local time).",
    },
    {
      question: "Can I update my contact details after submission?",
      answer:
        "Yes, you can update your details by reaching out to our support team with your request. Please include your reference number if applicable.",
    },
    {
      question: "How soon can I expect a response after submitting the form?",
      answer:
        "We aim to respond to all inquiries within 24-48 hours, excluding weekends and public holidays.",
    },
    {
      question: "Is my data secure when I submit the form?",
      answer:
        "Absolutely! We use encryption and follow best practices to ensure your data is safe and secure.",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: FAQ Image */}
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={faQuestion}
            alt="FAQ Illustration"
            className="w-[90%] sm:w-[80%] mx-auto rounded-lg"
          />
        </div>

        {/* Right Side: FAQ Section */}
        <div
          className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2
            className="text-title"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <Collapse
            accordion
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined
                rotate={isActive ? 90 : 0}
                className="text-purple-500 transition-transform duration-300"
              />
            )}
            className="site-collapse-custom-collapse"
          >
            {faqs.map((faq, index) => (
              <Panel
                header={
                  <div
                    className="flex items-center"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                  >
                    <span className="text-sm md:text-base lg:text-lg text-gray-700 font-primary dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                }
                key={index}
                className="site-collapse-custom-panel border-b border-gray-200 dark:border-gray-700"
              >
                <p
                  className="text-sm sm:text-base text-gray-700 dark:text-white font-primary"
                  data-aos="fade-left"
                  data-aos-delay={index * 100 + 200}
                >
                  {faq.answer}
                </p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQuestions;
