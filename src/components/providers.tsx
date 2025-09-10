"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from 'react-i18next';
import { useEffect } from 'react';
import i18n from '@/lib/i18n';
import { ModalProvider } from '@/contexts/ModalContext';

interface ProvidersProps {
  children: React.ReactNode;
}

function ThemeLogger() {
  useEffect(() => {
    console.log('🚀 ThemeProvider initialized');
    console.log('📱 System prefers dark:', window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log('🏷️ Initial document class:', document.documentElement.className);
  }, []);

  return null;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem
        disableTransitionOnChange={false}
      >
        <HeroUIProvider>
          <ModalProvider>
            <ThemeLogger />
            {children}
          </ModalProvider>
        </HeroUIProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
