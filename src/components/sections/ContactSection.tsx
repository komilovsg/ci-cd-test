"use client";

import { useTranslation } from 'react-i18next';
import { Chip } from "@heroui/react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <Section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <Heading level={2} className="mb-4">
            {t('contact.title')}
          </Heading>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t('contact.description')}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Mail className="text-blue-600" size={20} />
              <span>komilovsg@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Phone className="text-green-600" size={20} />
              <span>+992 93 500 50 05</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <MapPin className="text-red-600" size={20} />
              <span>Душанбе, Таджикистан</span>
            </div>
          </div>
        </div>
        
        {/* Technologies Used */}
        <div className="text-center">
          <h3 className="font-semibold mb-4">{t('footer.technologies')}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <Chip color="primary" variant="flat">Next.js 15</Chip>
            <Chip color="secondary" variant="flat">TypeScript</Chip>
            <Chip color="success" variant="flat">Hero UI</Chip>
            <Chip color="warning" variant="flat">Tailwind CSS</Chip>
            <Chip color="danger" variant="flat">Swiper.js</Chip>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
          © 2024 Shakhron Komilov. {t('footer.made')} 
          <Heart size={16} className="text-red-500" fill="currentColor" />
          {t('footer.love')}
        </p>
      </div>
    </Section>
  );
}
