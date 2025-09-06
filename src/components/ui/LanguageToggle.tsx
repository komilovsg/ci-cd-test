"use client";

import { Button } from "@heroui/react";
import { useTranslation } from 'react-i18next';
import { useAppStore } from "@/stores/useAppStore";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useAppStore();

  const handleLanguageChange = () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const getLanguageDisplay = () => {
    return language === 'ru' ? '🇷🇺' : '🇺🇸';
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleLanguageChange}
        variant="bordered"
        className="min-w-0 px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Переключить язык"
      >
        {getLanguageDisplay()}
      </Button>
    </div>
  );
}
