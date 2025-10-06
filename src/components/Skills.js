import React from "react";
import { FaHtml5, FaCss3Alt, FaDatabase, FaWordpress } from "react-icons/fa";
import { SiPostman, SiJavascript } from "react-icons/si";

const About = () => {
  const features = [
    {
      icon: <FaHtml5 className="w-6 h-6" />,

      title: "HTML & CSS",
      desc: "Strong foundation in building responsive and structured web pages using HTML5 and modern CSS3",
    },
    {
      icon: <SiJavascript className="w-6 h-6" />,
      title: "JS & React",
      desc: "Hands-on experience with JavaScript fundamentals and creating interactive UIs with React.",
    },
    {
      icon2: <FaCss3Alt className="w-6 h-6" />,
      title: "Tailwind CSS & Bootstrap",
      desc: "Capable of designing clean, responsive, and modern layouts using popular CSS frameworks.",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,

      title: "SQL & MongoDB & Firebase",
      desc: "Basic understanding of database design, queries, and working with cloud-based databases.",
    },
    {
      icon: <SiPostman className="w-6 h-6" />,
      title: "Postman",
      desc: "Familiar with testing REST APIs and debugging backend services using Postman.",
    },
    {
      icon: <FaWordpress className="w-6 h-6" />,

      title: "Wordpress& Shopify",
      desc: "Ability to build and customize simple websites and e-commerce stores with WordPress and Shopify.",
    },
  ];

  return (
    <section className="py-14" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            What I Do Best
          </h3>
          <p className="mt-3">
            As a fresher, I have been building my skills in modern web
            development technologies and continuously learning to improve. Here
            are some of the key areas I am confident in.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-14 h-14 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center gap-1">
                  {item.icon} {item.icon2}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default About;
