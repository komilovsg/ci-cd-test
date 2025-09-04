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
  Button
} from "@heroui/react";
import { Menu } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
      className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 py-5"
      maxWidth="xl"
    >
      <Container className="px-0">
        <NavbarContent>
          <NavbarBrand>

            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SK</span>
            </div>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Menu & Controls */}
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
          
          {/* Controls on the right */}
          <NavbarItem>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
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
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Настройки</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Тема</span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Язык</span>
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </NavbarMenu>
      </Container>
    </Navbar>
  );
}
