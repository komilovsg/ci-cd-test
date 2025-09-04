"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
