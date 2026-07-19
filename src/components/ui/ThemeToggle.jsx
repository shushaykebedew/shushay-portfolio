// ThemeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme-shushay", nextTheme);

    const root = document.documentElement;
    if (nextTheme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow hover:shadow-md transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
