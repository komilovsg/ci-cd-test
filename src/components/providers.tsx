"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/language-context";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <HeroUIProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </HeroUIProvider>
    </ThemeProvider>
  );
}
