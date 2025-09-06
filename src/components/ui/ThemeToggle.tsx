"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useAppStore } from "@/stores/useAppStore";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { setTheme: setStoreTheme } = useAppStore();

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setStoreTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleThemeChange}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500  border-2 border-transparent"
        aria-label="Переключить тему"
      >
        {/* Toggle Circle */}
        <span
          className={`inline-block h-6 w-6 transform shadow-lg transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-8 rounded-full bg-gray-800' : 'translate-x-1 rounded-full bg-white'
          }`}
        >
          {/* Icon inside circle */}
          <div className="flex items-center justify-center h-full w-full">
            {theme === 'dark' ? (
              <Moon size={12} className="text-blue-400" />
            ) : (
              <Sun size={12} className="text-yellow-500 " />
            )}
          </div>
        </span>
      </button>
    </div>
  );
}
