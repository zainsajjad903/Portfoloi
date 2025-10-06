import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Muhammad Zain. All rights reserved.
        </p>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/muhammad.zain.769197"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 text-white"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-zain-97a7a1315/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/zainsajjad903"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
