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
      <span className="text-xs text-gray-500 dark:text-gray-400">Тема</span>
      <button
        onClick={handleThemeChange}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Переключить тему"
      >
        {/* Toggle Circle */}
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
          }`}
        >
          {/* Icon inside circle */}
          <div className="flex items-center justify-center h-full w-full">
            {theme === 'dark' ? (
              <Moon size={12} className="text-blue-400" />
            ) : (
              <Sun size={12} className="text-yellow-500" />
            )}
          </div>
        </span>
        
        {/* Background Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Sun size={12} className="text-yellow-500 opacity-60" />
          <Moon size={12} className="text-blue-400 opacity-60" />
        </div>
      </button>
    </div>
  );
}
