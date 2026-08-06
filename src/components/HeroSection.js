import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl" />

      <div
        className="relative max-w-screen-xl mx-auto px-4 pt-20 pb-16 md:pt-36 md:pb-24 md:flex md:items-center md:gap-16"
        data-aos="fade-up"
      >
        {/* Mobile Image (Top) */}
        <motion.div
          className="flex justify-center mb-8 md:hidden"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-xl opacity-40 scale-105" />
            <img
              src="/image.png"
              alt="Profile"
              className="relative w-44 h-44 object-cover object-top shadow-xl border-4 border-white dark:border-gray-800 ring-2 ring-indigo-500 rounded-full mx-auto"
            />
          </div>
        </motion.div>

        {/* Desktop Image (Left Side) */}
        <motion.div
          className="flex-1 hidden md:flex items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 blur-2xl opacity-20" />
            <img
              src="/image.png"
              alt="Profile"
              className="relative w-full h-auto object-cover shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Eyebrow badge */}
          <motion.span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1.5 rounded-full mb-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Muhammad Zain
          </motion.span>

          {/* Title Animation */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              <Typewriter
                words={["Software Engineer", "MERN Stack Developer"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-xl mx-auto md:mx-0 text-gray-700 dark:text-gray-300 leading-8 text-base md:text-lg">
            Transforming ideas into high-performance web applications with a
            strong focus on scalable architecture, clean code, and seamless user
            experiences across the MERN stack.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <motion.a
              href="/MuhammadZainCV.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(79,70,229,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-x-2 px-7 py-3.5 font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md transition"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm7 11a1 1 0 01-1-1V7.414L7.707 9.707a1 1 0 01-1.414-1.414l3.999-4a1 1 0 011.416 0l4 4a1 1 0 01-1.416 1.414L11 7.414V13a1 1 0 01-1 1z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="mt-7 flex justify-center md:justify-start space-x-4">
            {[
              {
                href: "https://www.facebook.com/muhammad.zain.769197",
                icon: <FaFacebookF />,
              },
              {
                href: "https://www.linkedin.com/in/muhammad-zain-97a7a1315/",
                icon: <FaLinkedinIn />,
              },
              {
                href: "https://github.com/zainsajjad903",
                icon: <FaGithub />,
              },
            ].map(({ href, icon }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-indigo-600 transition-all shadow-md"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
