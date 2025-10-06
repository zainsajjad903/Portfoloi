import React from "react";

const Aboutme = () => {
  return (
    <div>
      <section id="about" className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hi, I'm{" "}
            <span className="font-semibold text-indigo-600">Muhammad Zain</span>{" "}
            — a Frontend Developer based in Lahore, Pakistan. I specialize in
            building modern, responsive, and user-friendly web applications
            using
            <span className="font-medium text-gray-800"> React </span> and
            <span className="font-medium text-gray-800"> TailwindCSS</span>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            I focus on writing clean, efficient code and creating seamless user
            experiences that bring ideas to life. My goal is to craft fast,
            accessible, and visually appealing websites that perform well on all
            devices.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I’m always open to learning new technologies and working on creative
            projects. If you have an idea or opportunity — let’s connect!
          </p>

          <a
            href="https://wa.me/923076048509?text=Hi%20Muhammad%20Zain,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Let’s Work Together
          </a>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
