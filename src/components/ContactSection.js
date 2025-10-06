import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";
const InputField = ({ label, placeholder, value, onChange, type = "text" }) => {
  return (
    <div className="flex flex-col w-full p-2">
      <label className="font-bold text-sm mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
      />
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex flex-col items-center md:items-start">
    <div className="flex items-center gap-3 text-xl font-bold">
      <img src={icon} alt="" className="w-10 h-10" />
      <h3>{title}</h3>
    </div>
    <p className=" mt-2">{content}</p>
  </div>
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vbrhk9i", // 👈 tumhara Service ID
        "template_q5v47y9", // 👈 tumhara Template ID
        {
          name: formData.firstName,
          email: formData.email,
          phone: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        },
        "Irl-_wThBtuMqX4dE" // 👈 tumhara Public Key
      )
      .then(
        (result) => {
          console.log(result.text);

          setFormData({
            firstName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649",
      title: "Phone",
      content: "+923076048509",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420",
      title: "Email ",
      content: "zainsajjad.903@gmail.com",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342",
      title: "Visit",
      content: "Gajjumatta Lahore Pakistan",
    },
  ];

  return (
    <div className="container mx-auto flex justify-center items-center p-6 md:p-12">
      <div className=" px-6 md:px-12 py-10 max-w-[1250px] w-full rounded-2xl">
        {/* Heading */}
        <section className="text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold">Contact us</h1>
          <p className="mt-6 md:mt-10 text-lg md:text-xl max-w-[650px] mx-auto">
            “Have a project idea or want to collaborate? Feel free to reach
            out!”
          </p>
        </section>

        {/* Contact info */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {contactData.map((item, index) => (
            <ContactItem
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </section>

        {/* Form */}
        <section className="flex flex-col p-6 md:p-10 rounded-xl shadow-xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* First row */}
            <div className="flex flex-col md:flex-row gap-4">
              <InputField
                label="First Name & Last Name"
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

            {/* Second row */}
            <div className="flex flex-col md:flex-row gap-4">
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
            <div className="flex flex-col w-full p-2">
              <label className="font-bold text-sm mb-1">Message</label>
              <textarea
                placeholder="Type your message here."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows={5}
              />
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-start pt-4">
              <button
                type="submit"
                className="text-lg text-white bg-indigo-600 rounded-lg px-10 py-3 hover:bg-indigo-700 transition"
                onClick={() => toast.success("Message sent successfully!")}
              >
                Send
              </button>
              <Toaster />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUsForm;
