import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Home,
  User,
  Code2,
  FolderGit2,
  Mail,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero-section");

  const navigation = [
    {
      id: "hero-section",
      title: "Home",
      path: "#hero-section",
      icon: <Home size={19} />,
    },
    {
      id: "aboutme-section",
      title: "About",
      path: "#aboutme-section",
      icon: <User size={19} />,
    },
    {
      id: "skills-section",
      title: "Services",
      path: "#skills-section",
      icon: <Code2 size={19} />,
    },
    {
      id: "projects-section",
      title: "Projects",
      path: "#projects-section",
      icon: <FolderGit2 size={19} />,
    },
    {
      id: "contact-section",
      title: "Contact",
      path: "#contact-section",
      icon: <Mail size={19} />,
    },
  ];

  // Theme logic
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll listener for header elevation & active section spy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section spy
      const sections = navigation
        .map((nav) => document.getElementById(nav.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6">
        <nav
          className={`flex items-center justify-between mx-auto max-w-6xl px-6 py-3 rounded-full transition-all duration-300 border ${
            scrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl shadow-indigo-500/5 border-gray-200/80 dark:border-gray-700/80"
              : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-md border-gray-200/50 dark:border-gray-800/50"
          }`}
        >
          {/* Logo / Developer Identity */}
          <a
            href="#hero-section"
            onClick={(e) => handleNavClick(e, "#hero-section", "hero-section")}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-white/80 dark:border-gray-900/80 bg-white/90 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src={`${process.env.PUBLIC_URL}/favicon.ico`}
                alt="Muhammad Zain logo"
                className="w-full h-full object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 dark:from-white dark:via-gray-100 dark:to-indigo-300 bg-clip-text text-transparent group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Muhammad Zain
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Available for work
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-gray-800/80 p-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path, item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full shadow-md shadow-indigo-500/30"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.icon}</span>
                  <span className="relative z-10">{item.title}</span>
                </a>
              );
            })}
          </div>

          {/* Right Actions: Theme Toggle & CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-sm"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact-section"
              onClick={(e) =>
                handleNavClick(e, "#contact-section", "contact-section")
              }
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-500 hover:to-violet-600 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Hire Me</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Top Navbar Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 flex items-center justify-between shadow-sm">
        <a
          href="#hero-section"
          onClick={(e) => handleNavClick(e, "#hero-section", "hero-section")}
          className="flex items-center gap-2.5"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border-2 border-white/80 dark:border-gray-900/80 bg-white/90 shadow-sm">
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Muhammad Zain logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-gray-900 dark:text-white">
              Muhammad Zain
            </span>
            <span className="flex items-center gap-1 text-[9px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for work
            </span>
          </div>
        </a>

        {/* Mobile Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 border border-gray-200 dark:border-gray-700 shadow-sm"
          title="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-around bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl shadow-2xl shadow-indigo-500/20 rounded-full px-4 py-2.5 w-[92%] max-w-md border border-gray-200/80 dark:border-gray-700/80 md:hidden">
        {navigation.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path, item.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all duration-300 ${
                isActive
                  ? "text-indigo-600 dark:text-indigo-400 font-bold scale-105"
                  : "text-gray-500 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute -top-1 w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full shadow-sm shadow-indigo-500"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span>{item.icon}</span>
              <span className="text-[10px] mt-0.5 tracking-tight">
                {item.title}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
