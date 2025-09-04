"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useAppStore } from "@/stores/useAppStore";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useAppStore();

  const handleLanguageChange = (newLanguage: 'ru' | 'en') => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" isIconOnly aria-label="Выбрать язык">
          <Globe size={20} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        selectedKeys={[language]}
        onSelectionChange={(keys) => {
          const selectedLang = Array.from(keys)[0] as 'ru' | 'en';
          handleLanguageChange(selectedLang);
        }}
      >
        <DropdownItem key="ru">🇷🇺 Русский</DropdownItem>
        <DropdownItem key="en">🇺🇸 English</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
