import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";

type FieldType = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const ContactMapAndForm = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    toast.success("Successfully submitted form");
    console.log(values);
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    toast.error("Please check your Input");
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="dark:bg-slate-800 bg-slate-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="relative overflow-hidden shadow-lg rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2341322716044!2d90.35345081445533!3d23.82234838455019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c139deb7b7d5%3A0x7d56d411689ba57!2sMirpur%20Shopping%20Centre!5e0!3m2!1sen!2sbd!4v1644311096102!5m2!1sen!2sbd"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              style={{ border: 0, filter: "grayscale(1)" }}
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Get in Touch</h2>
            <Form
              form={form}
              name="contact"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input className="w-full rounded-md" placeholder="John Doe" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input className="w-full rounded-md" placeholder="john@example.com" />
              </Form.Item>
              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: "Please input your subject!" }]}
              >
                <Input className="w-full rounded-md" placeholder="Subject of your message" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please input your message!" }]}
              >
                <TextArea
                  rows={4}
                  className="w-full rounded-md"
                  placeholder="Write your message here..."
                />
              </Form.Item>
              <Form.Item>
                <button
                  type="submit"
                  className="w-full bg-veryDarkViolet hover:bg-lightBlue text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  Submit
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 mt-16 text-center">
          {/* Phone */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg flex items-center justify-center space-x-4">
            <PhoneOutlined className="text-3xl text-strongCyan" />
            <div>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Phone</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">+123 456 7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg flex items-center justify-center space-x-4">
            <MailOutlined className="text-3xl text-strongCyan" />
            <div>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Email</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">support@domain.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg flex items-center justify-center space-x-4">
            <HomeOutlined className="text-3xl text-strongCyan" />
            <div>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Address</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                456 Elm Street,
                <br /> City, Country 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMapAndForm;
