import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaDatabase, FaWordpress } from "react-icons/fa";
import { SiPostman, SiJavascript } from "react-icons/si";

const About = () => {
  const features = [
    {
      icon: <FaHtml5 className="w-6 h-6" />,
      title: "HTML & CSS",
      desc: "Strong foundation in building responsive and structured web pages using HTML5 and modern CSS3.",
    },
    {
      icon: <SiJavascript className="w-6 h-6" />,
      title: "JavaScript & React",
      desc: "Hands-on experience with JavaScript fundamentals and creating interactive UIs with React.",
    },
    {
      icon: <FaCss3Alt className="w-6 h-6" />,
      title: "Tailwind CSS & Bootstrap",
      desc: "Capable of designing clean, responsive, and modern layouts using popular CSS frameworks.",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "SQL, MongoDB & Firebase",
      desc: "Basic understanding of database design, queries, and working with cloud-based databases.",
    },
    {
      icon: <SiPostman className="w-6 h-6" />,
      title: "Postman",
      desc: "Familiar with testing REST APIs and debugging backend services using Postman.",
    },
    {
      icon: <FaWordpress className="w-6 h-6" />,
      title: "WordPress & Shopify",
      desc: "Ability to build and customize simple websites and e-commerce stores with WordPress and Shopify.",
    },
  ];

  return (
    <motion.section
      id="skills-section"
      className="relative py-24 text-center bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          className="max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1.5 rounded-full mb-4">
            Skills & Expertise
          </span>
          <h3 className="relative text-3xl sm:text-4xl font-semibold tracking-[0.16em] uppercase text-gray-900 dark:text-white after:mx-auto after:mt-4 after:block after:h-1 after:w-20 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500">
            What I Do Best
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            As a fresher, I've been sharpening my skills in modern web
            technologies and continuously learning to improve. Here are the key
            areas I'm confident in:
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative text-left space-y-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl p-7 sm:p-8 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -6,
                boxShadow: "0px 12px 28px rgba(79,70,229,0.25)",
              }}
            >
              {/* subtle gradient accent on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <div className="w-14 h-14 bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                {item.icon}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
