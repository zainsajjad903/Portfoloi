import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigation = [
    { title: "Home", path: "#hero-section" },
    { title: "About", path: "#aboutme-section" },
    { title: "Services", path: "#skills-section" },
    { title: "Projects", path: "#projects-section" },
    { title: "Contact", path: "#contact-section" },
  ];

  // 🔄 Theme logic
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-4 z-50">
      <nav className="flex items-center justify-between bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-gray-900 ">Muhammad Zain</h1>

        {/* 📱 Mobile Menu Toggle */}
        <button
          className="text-gray-700 outline-none md:hidden"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* 🌍 Navigation Links */}
        <ul
          className={`flex-1 justify-end items-center space-y-4 md:space-y-0 md:flex md:space-x-6 ${
            state
              ? "flex flex-col absolute top-16 left-0 w-full bg-white rounded-lg shadow-lg p-5"
              : "hidden md:flex"
          }`}
        >
          {navigation.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.path}
                className="text-gray-900 hover:text-indigo-600 font-medium transition"
                onClick={() => setState(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
          {/* 🌗 Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-all hover:scale-110"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
