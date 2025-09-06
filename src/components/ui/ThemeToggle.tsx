"use client";

import { Switch } from "@heroui/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useAppStore } from "@/stores/useAppStore";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { setTheme: setStoreTheme } = useAppStore();

  const handleThemeChange = (isSelected: boolean) => {
    const newTheme = isSelected ? 'dark' : 'light';
    setTheme(newTheme);
    setStoreTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 dark:text-gray-400">Тема</span>
      <Switch
        isSelected={theme === 'dark'}
        onValueChange={handleThemeChange}
        startContent={
          <div className="flex items-center justify-center w-4 h-4">
            <Sun size={14} className="text-yellow-500" />
          </div>
        }
        endContent={
          <div className="flex items-center justify-center w-4 h-4">
            <Moon size={14} className="text-blue-400" />
          </div>
        }
        aria-label="Переключить тему"
        classNames={{
          base: "inline-flex flex-row-reverse w-16 h-8 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 items-center justify-between cursor-pointer rounded-full gap-1 p-1 border-2 border-transparent data-[selected=true]:border-blue-500 dark:data-[selected=true]:border-blue-400 transition-all duration-300",
          wrapper: "p-0 h-6 overflow-visible",
          thumb: "w-6 h-6 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 shadow-lg group-data-[hover=true]:border-blue-500 dark:group-data-[hover=true]:border-blue-400 group-data-[selected=true]:ml-6 group-data-[pressed=true]:w-7 group-data-[selected]:group-data-[pressed]:ml-4 transition-all duration-300"
        }}
      />
    </div>
  );
}
