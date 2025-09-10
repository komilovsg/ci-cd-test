"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardBody, Button, Chip } from '@heroui/react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: 'FLY.TJ',
    description: {
      ru: 'Официальный сайт авиакомпании FLY.TJ с системой бронирования билетов',
      en: 'Official website of FLY.TJ airline with ticket booking system'
    },
    image: '/projects/flytj.png',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'API Integration'],
    liveUrl: 'https://fly.tj/',
    githubUrl: null
  },
  {
    id: 2,
    title: 'Business FLY.TJ',
    description: {
      ru: 'B2B платформа для корпоративных клиентов авиакомпании',
      en: 'B2B platform for corporate clients of the airline'
    },
    image: '/projects/busnessflytj.png',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'API Integration'],
    liveUrl: 'https://business.fly.tj/',
    githubUrl: null
  },
  {
    id: 3,
    title: 'Zinda.tj',
    description: {
      ru: 'Информационный портал с новостями и аналитикой',
      en: 'Information portal with news and analytics'
    },
    image: '/projects/zindatj.png',
    technologies: ['Next.js', 'TypeScript', 'SCSS', 'Mailer'],
    liveUrl: 'https://zinda.tj/',
    githubUrl: null
  },
  {
    id: 4,
    title: 'Anbor.tj',
    description: {
      ru: 'ERP система для управления бизнесом и складским учетом',
      en: 'ERP system for business management and warehouse accounting'
    },
    image: '/projects/anbortj.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Mailer'],
    liveUrl: 'https://anbor.tj/',
    githubUrl: null
  }
];

export function ProjectsSlider() {
  const { i18n, t } = useTranslation();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="projects-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Card className="h-[500px] hover:shadow-xl rounded-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex gap-2">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      className="bg-white/90 backdrop-blur-sm"
                      onPress={() => window.open(project.liveUrl, '_blank')}
                      aria-label="Открыть проект"
                    >
                      <ExternalLink size={16} />
                    </Button>
                    {project.githubUrl && (
                      <Button
                        isIconOnly
                        size="sm"
                        variant="flat"
                        className="bg-white/90 backdrop-blur-sm"
                        onPress={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                        aria-label="Открыть код проекта"
                      >
                        <Github size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardBody className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description[i18n.language as 'ru' | 'en']}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4 flex-grow">
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      size="sm"
                      variant="flat"
                      color="primary"
                      className="text-xs"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <Button
                    size="sm"
                    color="primary"
                    variant="flat"
                    startContent={<ExternalLink size={14} />}
                    onPress={() => window.open(project.liveUrl, '_blank')}
                    className={project.githubUrl ? "flex-1" : "w-full"}
                  >
                    {t('projects.view')}
                  </Button>
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="bordered"
                      startContent={<Github size={14} />}
                      onPress={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      {t('projects.code')}
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .projects-swiper .swiper-pagination-bullet {
          background: rgb(59 130 246);
          opacity: 0.5;
        }
        
        .projects-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: rgb(59 130 246);
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        
        .projects-swiper .swiper-button-next:after,
        .projects-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
