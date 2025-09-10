"use client";

import { Button, Avatar } from "@heroui/react";
import { useTranslation } from 'react-i18next';
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Stat } from "./Stat";

export function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.experience'), value: '3+' },
    { label: t('about.projects'), value: '20+' },
    { label: t('about.clients'), value: '5+' }
  ];

  const handleDownloadResume = async () => {
    try {
      console.log('📄 Starting resume download...');
      
      // Метод 1: Прямая ссылка (работает в большинстве случаев)
      const link = document.createElement('a');
      link.href = '/resume/CV-Komilov(rus&eng).pdf';
      link.download = 'CV-Komilov(rus&eng).pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('✅ Resume download initiated successfully');
    } catch (error) {
      console.error('❌ Error downloading resume:', error);
      
      // Fallback: открываем в новой вкладке
      try {
        window.open('/resume/CV-Komilov(rus&eng).pdf', '_blank');
        console.log('📄 Opened resume in new tab as fallback');
      } catch (fallbackError) {
        console.error('❌ Fallback also failed:', fallbackError);
      }
    }
  };

  return (
    <section id="about" className="flex items-center py-8 min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                {t('hero.greeting')}
              </p>
              <Heading level={1}>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {t('hero.name')}
                </span>
              </Heading>
              <Heading level={3} className="text-gray-600 dark:text-gray-300">
                {t('hero.title')}
              </Heading>
              <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                color="primary" 
                size="lg"
                className="font-semibold"
                startContent={<Mail size={20} />}
                onClick={() => window.open('mailto:komilovsg@gmail.com', '_blank')}
              >
                {t('hero.cta')}
              </Button>
              <Button 
                variant="bordered" 
                size="lg"
                className="font-semibold"
                startContent={<Download size={20} />}
                onClick={handleDownloadResume}
              >
                {t('hero.resume')}
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                isIconOnly 
                variant="light" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" 
                aria-label="GitHub профиль"
                onClick={() => window.open('https://github.com/komilovsg', '_blank')}
              >
                <FaGithub size={24} />
              </Button>
              <Button 
                isIconOnly 
                variant="light" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" 
                aria-label="LinkedIn профиль"
                onClick={() => window.open('https://www.linkedin.com/in/komilovsg/', '_blank')}
              >
                <FaLinkedin size={24} />
              </Button>
              <Button 
                isIconOnly 
                variant="light" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" 
                aria-label="Telegram профиль"
                onClick={() => window.open('https://t.me/komilovsg', '_blank')}
              >
                <FaTelegram size={24} />
              </Button>
            </div>
          </div>
          
          {/* Right Side - Photo & Stats */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative group cursor-pointer">
              <Avatar
                src="/my_picture.jpg"
                className="w-48 h-48 lg:w-64 lg:h-64"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group cursor-pointer">
                <span className="text-white text-2xl transition-transform duration-300 ease-in-out group-hover:rotate-45 animate-pulse">
                  👋
                </span>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
