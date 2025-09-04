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
    <Switch
      isSelected={theme === 'dark'}
      onValueChange={handleThemeChange}
      startContent={<Sun size={16} />}
      endContent={<Moon size={16} />}
      classNames={{
        base: "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center justify-between cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent data-[selected=true]:border-primary",
        wrapper: "p-0 h-4 overflow-visible",
        thumb: "w-6 h-6 border-2 shadow-lg group-data-[hover=true]:border-primary group-data-[selected=true]:ml-6 group-data-[pressed=true]:w-7 group-data-[selected]:group-data-[pressed]:ml-4"
      }}
    />
  );
}
