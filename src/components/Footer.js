import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 border-t border-gray-700 shadow-[0_-4px_20px_rgba(79,70,229,0.15)]">
      {/* Subtle glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 opacity-60" />

      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/3 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand + Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Muhammad Zain
          </span>
          <p className="mt-1 text-sm text-gray-400 tracking-[0.1em] uppercase">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        {/* Right: Social Icons + Back to top */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            {
              href: "https://www.facebook.com/muhammad.zain.769197",
              icon: <FaFacebookF />,
              label: "Facebook",
            },
            {
              href: "https://www.linkedin.com/in/muhammad-zain-97a7a1315/",
              icon: <FaLinkedinIn />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/zainsajjad903",
              icon: <FaGithub />,
              label: "GitHub",
            },
          ].map(({ href, icon, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 shadow-md"
            >
              {icon}
            </a>
          ))}

          {/* Divider */}
          <span className="w-px h-6 bg-gray-700 mx-1" />

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 shadow-md"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
