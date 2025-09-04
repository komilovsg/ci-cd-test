"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Header
    'nav.about': 'Обо мне',
    'nav.skills': 'Навыки',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.greeting': 'Привет! Я',
    'hero.name': 'Шахрон Комилов',
    'hero.title': 'Senior Frontend разработчик',
    'hero.description': 'Создаю современные веб-приложения с использованием React, Next.js и TypeScript. Специализируюсь на производительных и масштабируемых решениях.',
    'hero.cta': 'Связаться со мной',
    'hero.resume': 'Скачать резюме',
    
    // About Section
    'about.title': 'Обо мне',
    'about.description': 'Опытный Frontend разработчик с более чем 5-летним опытом создания веб-приложений. Увлечен современными технологиями и лучшими практиками разработки.',
    'about.experience': 'Опыт работы',
    'about.projects': 'Завершенных проектов',
    'about.clients': 'Довольных клиентов',
    
    // Skills Section
    'skills.title': 'Технические навыки',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Инструменты',
    
    // Projects Section
    'projects.title': 'Избранные проекты',
    'projects.view': 'Посмотреть',
    'projects.code': 'Код',
    
    // Contact Section
    'contact.title': 'Свяжитесь со мной',
    'contact.description': 'Готов обсудить ваш проект или возможности сотрудничества',
    'contact.email': 'Email',
    'contact.phone': 'Телефон',
    'contact.location': 'Местоположение',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.made': 'Сделано с',
    'footer.love': 'любовью',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.skills': 'Skills', 
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi! I\'m',
    'hero.name': 'Shakhron Komilov',
    'hero.title': 'Senior Frontend Developer',
    'hero.description': 'I create modern web applications using React, Next.js and TypeScript. Specialized in performant and scalable solutions.',
    'hero.cta': 'Get in touch',
    'hero.resume': 'Download resume',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'Experienced Frontend developer with 5+ years of experience building web applications. Passionate about modern technologies and development best practices.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.view': 'View',
    'projects.code': 'Code',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'Ready to discuss your project or collaboration opportunities',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.made': 'Made with',
    'footer.love': 'love',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
