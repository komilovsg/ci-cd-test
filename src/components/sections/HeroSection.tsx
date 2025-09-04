"use client";

import { Button, Avatar } from "@heroui/react";
import { useTranslation } from 'react-i18next';
import { Mail, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Stat } from "@/components/sections/Stat";

export function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.experience'), value: '5+' },
    { label: t('about.projects'), value: '50+' },
    { label: t('about.clients'), value: '30+' }
  ];

  return (
    <section className="flex-1 flex items-center">
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
              >
                {t('hero.cta')}
              </Button>
              <Button 
                variant="bordered" 
                size="lg"
                className="font-semibold"
                startContent={<Download size={20} />}
              >
                {t('hero.resume')}
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button isIconOnly variant="light" className="text-gray-600 dark:text-gray-400">
                <Github size={24} />
              </Button>
              <Button isIconOnly variant="light" className="text-gray-600 dark:text-gray-400">
                <Linkedin size={24} />
              </Button>
              <Button isIconOnly variant="light" className="text-gray-600 dark:text-gray-400">
                <Twitter size={24} />
              </Button>
            </div>
          </div>
          
          {/* Right Side - Photo & Stats */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                className="w-48 h-48 lg:w-64 lg:h-64"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">👋</span>
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
