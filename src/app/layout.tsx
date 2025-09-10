import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Шахрон Комилов - Frontend разработчик | Shakhron Komilov - Frontend Developer",
  description: "Портфолио Frontend разработчика. React, Next.js, TypeScript. Создаю современные веб-приложения. | Frontend Developer Portfolio. React, Next.js, TypeScript. Building modern web applications.",
  keywords: ["портфолио", "frontend", "разработчик", "react", "nextjs", "typescript", "portfolio", "developer"],
  authors: [{ name: "Шахрон Комилов", url: "https://github.com/komilovsg" }],
  openGraph: {
    title: "Шахрон Комилов - Frontend разработчик",
    description: "Портфолио Frontend разработчика. React, Next.js, TypeScript.",
    type: "website",
    locale: "ru_RU",
    alternateLocale: "en_US",
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
