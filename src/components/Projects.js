import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Expense Tracker App",
    description:
      "Smart browser extension to clip and save web content instantly.",
    image: "/image3.png",
    tags: ["React", "Firebase", "TailwindCSS", "Node.js"],
    link: "https://github.com/your-username/ai-clipper",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website built with React and TailwindCSS.",
  //   image: "/image3.png",
  //   tags: ["React", "Tailwind"],
  //   link: "https://github.com/your-username/ai-clipper",
  // },
  {
    title: "Chrome Extension (AI Clipper)",
    description:
      "Track your daily expenses with real-time Firebase storage and analytics.",
    image: "/image2.png",
    tags: ["React", "Firebase", "TailwindCSS", "Node.js"],
    link: "https://github.com/your-username/ai-clipper",
  },
  {
    title: "INoteBook",
    description:
      "Secure cloud-based app to create, edit, and manage personal notes.",
    image: "/image4.png",
    tags: ["React", "MongoDB", "Bootstrap", "Node.js", "Express"],
    link: "https://github.com/your-username/ai-clipper",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Mobile = 1 card, Desktop = 3 cards
  const itemsPerPage = window.innerWidth < 768 ? 1 : 3;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage
    );
  };

  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800">
          My Works
        </h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          A showcase of some of my projects demonstrating my skills in MERN
          stack and web development.
        </p>

        {/* Slider */}
        <div className="relative mt-10">
          <div className="flex gap-6 justify-center">
            {projects
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-contain bg-gray-100 rounded-t-2xl"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
