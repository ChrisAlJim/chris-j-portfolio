import { useState, useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, theme, toggleTheme}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-sm dark:shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-black dark:text-white">
            {" "}
            Chris_A<span className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">.Jim</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-black dark:text-gray-300"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-black dark:text-gray-300 hover:text-cyan-500 dark:hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black dark:text-gray-300 hover:text-cyan-500 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-black dark:text-gray-300 hover:text-cyan-500 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-black dark:text-gray-300 hover:text-cyan-500 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              onClick={toggleTheme}
              className="text-black dark:text-gray-300 hover:text-cyan-500 dark:hover:text-white transition-colors cursor-pointer"
            >
              {theme === "light" ? "(0_0)" : "(-_-)"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};