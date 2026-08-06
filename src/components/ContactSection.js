import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";

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
      className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
    />
  </motion.div>
);

const ContactItem = ({ Icon, title, content }) => (
  <motion.div
    className="group flex flex-col items-center md:items-start text-gray-800 dark:text-gray-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef();

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        "Irl-_wThBtuMqX4dE",
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
        },
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactData = [
    { Icon: Phone, title: "Phone", content: "+92 307 6048509" },
    { Icon: Mail, title: "Email", content: "nullsatcksloutions@gmail.com" },
    { Icon: MapPin, title: "Visit", content: "Gajjumatta, Lahore, Pakistan" },
  ];

  return (
    <motion.section
      id="contact-section"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Toaster />

      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-indigo-300/25 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-purple-300/25 dark:bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-screen-xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1.5 rounded-full mb-5">
            Get In Touch
          </span>
          <h1 className="relative text-3xl md:text-4xl font-semibold tracking-[0.16em] uppercase text-gray-900 dark:text-white after:mx-auto after:mt-4 after:block after:h-1 after:w-20 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500">
            Contact{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Have a project idea or want to collaborate? I'd love to hear from
            you — let's make something great together.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactData.map((item, i) => (
            <ContactItem
              key={i}
              Icon={item.Icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-200 dark:border-gray-700 text-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
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
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              rows={5}
            />
          </motion.div>

          {/* Button */}
          <div className="flex justify-center md:justify-start pt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{
                scale: isSubmitting ? 1 : 1.05,
                boxShadow: "0px 10px 25px rgba(79,70,229,0.4)",
              }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className="inline-flex items-center gap-2 text-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full px-10 py-3 shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUsForm;
