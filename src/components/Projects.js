import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ITGlobBiz Solutions",
    description:
      "Enterprise tech services agency platform offering custom application design, AI integration, and digital growth solutions.",
    image: "/504_1x_shots_so.png",
    tags: ["Next.js", "React", "TailwindCSS"],
    link: "https://www.itglobbizsolutions.com/",
  },
  {
    title: "Tax Audit Pakistan",
    description:
      "Professional platform for expert tax returns filing, SECP company registration, and corporate legal compliance.",
    image: "/498_1x_shots_so.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    link: "https://www.taxauditpakistan.com/",
  },
  {
    title: "Client Management System",
    description:
      "Smart client management system built with React and Firebase.",
    image: "/screencapture-localhost-3000-2026-08-06-10_43_22.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    link: "https://clientmaagement.vercel.app/",
  },
  {
    title: "Chrome Extension (AI Clipper)",
    description:
      "Track your daily expenses with real-time Firebase storage and analytics.",
    image: "/image2.png",
    tags: ["React", "Firebase", "TailwindCSS", "Node.js"],
    link: "https://github.com/zainsajjad903/ai-clipper",
  },
  {
    title: "Expensor - Expense Tracker",
    description:
      "Keep track of your daily expenses with real-time Firebase storage and analytics.",
    image: "/image4.png",
    tags: ["React", "TailwindCSS", "Firebase"],
    link: "https://personalapp-rho.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    // safe on client only — avoids SSR "window is not defined" crash
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, projects.length - itemsPerPage)
        : Math.max(0, prev - itemsPerPage),
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage,
    );
  };

  const goToPage = (pageIdx) => setCurrentIndex(pageIdx * itemsPerPage);

  return (
    <section
      id="projects-section"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"
      data-aos="fade-up"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-indigo-300/25 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-purple-300/25 dark:bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1.5 rounded-full mb-5">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            A showcase of some of my projects demonstrating my skills in MERN
            stack and web development.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative mt-14 px-2 sm:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {projects
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((project, idx) => (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="group w-full sm:w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-56 bg-gray-100 dark:bg-gray-900 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-900/0 to-indigo-900/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-4">
                        <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          View Project <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold tracking-[0.02em] text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous projects"
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full shadow-md p-2.5 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next projects"
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full shadow-md p-2.5 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => goToPage(pageIdx)}
                aria-label={`Go to page ${pageIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  pageIdx === currentPage
                    ? "w-6 bg-indigo-600"
                    : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-indigo-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
