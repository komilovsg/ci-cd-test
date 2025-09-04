"use client";

import { useState } from 'react';
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Switch,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@heroui/react";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'skills', label: t('nav.skills') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarBrand>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SK</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shakhron
            </span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.key}>
            <Button
              variant="light"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onPress={() => scrollToSection(item.key)}
            >
              {item.label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Desktop Controls */}
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Switch
            isSelected={theme === 'dark'}
            onValueChange={(isSelected) => setTheme(isSelected ? 'dark' : 'light')}
            startContent={<Sun size={16} />}
            endContent={<Moon size={16} />}
            classNames={{
              base: "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center justify-between cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent data-[selected=true]:border-primary",
              wrapper: "p-0 h-4 overflow-visible",
              thumb: "w-6 h-6 border-2 shadow-lg group-data-[hover=true]:border-primary group-data-[selected=true]:ml-6 group-data-[pressed=true]:w-7 group-data-[selected]:group-data-[pressed]:ml-4"
            }}
          />
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" isIconOnly>
                <Globe size={20} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              selectedKeys={[language]}
              onSelectionChange={(keys) => {
                const selectedLang = Array.from(keys)[0] as 'ru' | 'en';
                setLanguage(selectedLang);
              }}
            >
              <DropdownItem key="ru">🇷🇺 Русский</DropdownItem>
              <DropdownItem key="en">🇺🇸 English</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
        icon={<Menu size={24} />}
      />

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
        <div className="flex flex-col space-y-4 pt-6">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.key}>
              <Button
                variant="light"
                className="justify-start text-lg w-full"
                onPress={() => scrollToSection(item.key)}
              >
                {item.label}
              </Button>
            </NavbarMenuItem>
          ))}
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm font-medium">Тема</span>
            <Switch
              isSelected={theme === 'dark'}
              onValueChange={(isSelected) => setTheme(isSelected ? 'dark' : 'light')}
              startContent={<Sun size={14} />}
              endContent={<Moon size={14} />}
              size="sm"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Язык</span>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light" size="sm">
                  {language === 'ru' ? '🇷🇺 RU' : '🇺🇸 EN'}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                selectedKeys={[language]}
                onSelectionChange={(keys) => {
                  const selectedLang = Array.from(keys)[0] as 'ru' | 'en';
                  setLanguage(selectedLang);
                }}
              >
                <DropdownItem key="ru">🇷🇺 Русский</DropdownItem>
                <DropdownItem key="en">🇺🇸 English</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
