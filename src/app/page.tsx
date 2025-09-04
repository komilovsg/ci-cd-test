"use client";

import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden">
      <Header />
      
      {/* Main Content - Single Page Layout */}
      <div className="h-[calc(100vh-4rem)] flex flex-col">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
