"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'skills', label: t('nav.skills') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Высота фиксированного хедера
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-purple-800 dark:text-gray-300 body-font bg-white/90 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-200 dark:border-gray-700 shadow-sm" suppressHydrationWarning>
      <div className="container mx-auto flex items-center justify-between p-5 md:flex-row">
        {/* Logo */}
        <a 
          className="flex title-font font-medium items-center text-purple-900 dark:text-white mb-4 md:mb-0 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">SK</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
          {mounted ? menuItems.map((item) => (
            <a
              key={item.key}
              className="mr-5 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors font-medium"
              onClick={() => scrollToSection(item.key)}
            >
              {item.label}
            </a>
          )) : (
            // Fallback для SSR
            <>
              <a className="mr-5 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">About</a>
              <a className="mr-5 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">Skills</a>
              <a className="mr-5 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">Projects</a>
              <a className="mr-5 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors font-medium">Contact</a>
            </>
          )}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-purple-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 focus:outline-none hover:bg-purple-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-purple-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mounted ? menuItems.map((item) => (
              <a
                key={item.key}
                className="block px-3 py-2 text-base font-medium text-purple-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors hover:bg-purple-50 dark:hover:bg-gray-800 rounded-lg"
                onClick={() => scrollToSection(item.key)}
              >
                {item.label}
              </a>
            )) : (
              // Fallback для SSR
              <>
                <a className="block px-3 py-2 text-base font-medium text-purple-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors hover:bg-purple-50 dark:hover:bg-gray-800 rounded-lg">About</a>
                <a className="block px-3 py-2 text-base font-medium text-purple-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors hover:bg-purple-50 dark:hover:bg-gray-800 rounded-lg">Skills</a>
                <a className="block px-3 py-2 text-base font-medium text-purple-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors hover:bg-purple-50 dark:hover:bg-gray-800 rounded-lg">Projects</a>
                <a className="block px-3 py-2 text-base font-medium text-purple-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-blue-400 cursor-pointer transition-colors hover:bg-purple-50 dark:hover:bg-gray-800 rounded-lg">Contact</a>
              </>
            )}
            
            <div className="pt-4 border-t border-purple-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium text-purple-800 dark:text-gray-300">
                  {mounted ? t('nav.settings') : 'Settings'}
                </span>
              </div>
              <div className="flex items-center justify-between px-3 py-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
