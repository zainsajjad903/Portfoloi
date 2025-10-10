import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const InputField = ({ label, placeholder, value, onChange, type = "text" }) => (
  <motion.div
    className="flex flex-col w-full md:w-1/2 p-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <label className="font-bold text-sm mb-2 text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
    />
  </motion.div>
);

const ContactItem = ({ icon, title, content }) => (
  <motion.div
    className="flex flex-col items-center md:items-start text-gray-800 dark:text-gray-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 text-xl font-bold">
      <img src={icon} alt="" className="w-10 h-10" />
      <h3>{title}</h3>
    </div>
    <p className="mt-2 text-gray-600 dark:text-gray-400">{content}</p>
  </motion.div>
);

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vbrhk9i",
        "template_q5v47y9",
        {
          name: formData.firstName,
          email: formData.email,
          phone: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        },
        "Irl-_wThBtuMqX4dE"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({
            firstName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649",
      title: "Phone",
      content: "+92 307 6048509",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420",
      title: "Email",
      content: "zainsajjad.903@gmail.com",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342",
      title: "Visit",
      content: "Gajjumatta, Lahore, Pakistan",
    },
  ];

  return (
    <motion.section
      id="contact-section"
      className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Toaster />
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Have a project idea or want to collaborate? I’d love to hear from
            you — let’s make something great together.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactData.map((item, i) => (
            <ContactItem
              key={i}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-1xl p-6 sm:p-10 md:p-12 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4 w-full ">
            <InputField
              label="Full Name"
              value={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
            />
            <InputField
              label="Email"
              value={formData.email}
              type="email"
              onChange={(value) => handleChange("email", value)}
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <InputField
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={(value) => handleChange("phoneNumber", value)}
            />
            <InputField
              label="Subject"
              value={formData.subject}
              onChange={(value) => handleChange("subject", value)}
            />
          </div>

          {/* Message */}
          <motion.div
            className="flex flex-col w-full p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label className="font-bold text-sm mb-2 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              placeholder="Type your message here..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              rows={5}
            />
          </motion.div>

          {/* Button */}
          <motion.div
            className="flex justify-center md:justify-start pt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="text-lg text-white bg-indigo-600 rounded-full px-10 py-3 hover:bg-indigo-700 shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUsForm;
