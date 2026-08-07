import React from "react";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.section
      id="aboutme-section"
      className="relative overflow-hidden py-24 text-center bg-gradient-to-t from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute -top-24 left-1/4 w-80 h-80 bg-indigo-300/25 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-80 h-80 bg-purple-300/25 dark:bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.span
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1.5 rounded-full mb-5"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get To Know Me
        </motion.span>

        <motion.h2
          className="relative text-3xl md:text-4xl font-semibold tracking-[0.16em] uppercase mb-8 text-gray-900 dark:text-white after:mx-auto after:mt-4 after:block after:h-1 after:w-20 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <motion.div
          className="space-y-5 text-gray-700 dark:text-gray-300 leading-8 text-base md:text-lg text-center bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700 shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p>
            Hi, I'm{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Muhammad Zain
            </span>{" "}
            — a Software Engineer based in Lahore, Pakistan. I specialize in
            building scalable, modern, and user-friendly web applications using
            the <span className="font-medium">MERN</span> stack, including{" "}
            <span className="font-medium">React</span>,{" "}
            <span className="font-medium">Node.js</span>,{" "}
            <span className="font-medium">Express</span>, and{" "}
            <span className="font-medium">MongoDB</span>.
          </p>

          <p>
            I focus on writing clean, efficient code and creating seamless user
            experiences that bring ideas to life. My goal is to craft fast,
            accessible, and visually appealing digital products that are
            reliable, maintainable, and built for real impact.
          </p>

          <p>
            I'm always open to learning new technologies and working on creative
            projects. If you have an idea or opportunity — let's connect!
          </p>
        </motion.div>

        <motion.a
          href="https://wa.me/923076048509?text=Hi%20Muhammad%20Zain,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold tracking-[0.12em] uppercase shadow-md transition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(79,70,229,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Aboutme;
