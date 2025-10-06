import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "#hero-section" },
    { title: "About", path: "#aboutme-section" },
    { title: "Services", path: "#skills-section" },

    { title: "Projects", path: "#projects-section" },
    { title: "Contact", path: "#contact-section" },
  ];

  return (
    <header className="sticky top-4 z-50">
      <nav className="flex items-center justify-between bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold">Muhammad Zain</h1>

        {/* Mobile button */}
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

        {/* Menu */}
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
                className="text-gray-600 hover:text-indigo-600 font-medium transition"
                onClick={() => setState(false)} // mobile menu close on click
              >
                {item.title}
              </a>
            </li>
          ))}
          <li>
            {/* <a
              href="#signin"
              className="py-2 px-5 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition"
              onClick={() => setState(false)}
            >
              Sign In
            </a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
