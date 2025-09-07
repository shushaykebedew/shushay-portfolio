import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        theme === "dark"
          ? "border-gray-800 bg-gray-950/90"
          : "border-gray-200 bg-white/90"
      } backdrop-blur`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-bold text-lg flex items-center gap-1">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-2 py-1 rounded">
            SHUSHAY
          </span>
          <span className="hidden sm:inline">KEBEDEW</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 items-center text-sm font-medium">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition`}
            >
              {label}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-xl border cursor-pointer ${
              theme === "dark"
                ? "border-gray-800 hover:bg-gray-900"
                : "border-gray-200 hover:bg-gray-100"
            }`}
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden inline-flex items-center p-2 rounded-xl border cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div
          className={`${
            theme === "dark"
              ? "bg-gray-950 border-gray-800"
              : "bg-white border-gray-200"
          } sm:hidden border-t`}
        >
          <div className="flex flex-col gap-2 px-4 py-3">
            {links.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } px-2 py-2 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 border rounded-xl mt-2 flex items-center justify-center cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
