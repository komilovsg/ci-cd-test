"use client";

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function DynamicTitle() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const updateTitle = () => {
      const title = i18n.language === 'ru' ? 'Портфолио' : 'Portfolio';
      document.title = title;
    };

    // Update title on language change
    updateTitle();
    
    // Listen for language changes
    const handleLanguageChange = () => {
      updateTitle();
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return null; // This component doesn't render anything
}
