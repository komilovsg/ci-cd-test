"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Логирование текущей темы
  useEffect(() => {
    if (mounted) {
      console.log('🎨 Theme State:', {
        theme,
        resolvedTheme,
        documentClass: document.documentElement.className,
        isDark: document.documentElement.classList.contains('dark'),
        isLight: document.documentElement.classList.contains('light')
      });
    }
  }, [theme, resolvedTheme, mounted]);

  const handleThemeChange = () => {
    const currentTheme = resolvedTheme || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log('🔄 Theme Change:', {
      from: currentTheme,
      to: newTheme,
      theme,
      resolvedTheme
    });
    
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <button
          className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-transparent"
          aria-label="Переключить тему"
        >
          <span className="inline-block h-6 w-6 transform translate-x-1 rounded-full bg-white shadow-lg transition-transform duration-300">
            <div className="flex items-center justify-center h-full w-full">
              <Sun size={12} className="text-yellow-500" />
            </div>
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2" suppressHydrationWarning>
      <button
        onClick={handleThemeChange}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500  border-2 border-transparent"
        aria-label="Переключить тему"
      >
        {/* Toggle Circle */}
        <span
          className={`inline-block h-6 w-6 transform shadow-lg transition-transform duration-300 ${
            (resolvedTheme || 'light') === 'dark' ? 'translate-x-8 rounded-full bg-gray-800' : 'translate-x-1 rounded-full bg-white'
          }`}
        >
          {/* Icon inside circle */}
          <div className="flex items-center justify-center h-full w-full">
            {(resolvedTheme || 'light') === 'dark' ? (
              <Moon size={12} className="text-blue-400" />
            ) : (
              <Sun size={12} className="text-yellow-500" />
            )}
          </div>
        </span>
      </button>
    </div>
  );
}
