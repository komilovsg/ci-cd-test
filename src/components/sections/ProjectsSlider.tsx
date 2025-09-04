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
    title: 'E-commerce Platform',
    description: {
      ru: 'Современная платформа электронной коммерции с Next.js и Stripe',
      en: 'Modern e-commerce platform built with Next.js and Stripe'
    },
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project1'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: {
      ru: 'Приложение для управления задачами с реальным временем обновлений',
      en: 'Task management application with real-time updates'
    },
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project2'
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: {
      ru: 'Интерактивная панель аналитики с красивыми графиками',
      en: 'Interactive analytics dashboard with beautiful charts'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project3'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: {
      ru: 'Мобильное банковское приложение с безопасными транзакциями',
      en: 'Mobile banking application with secure transactions'
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project4'
  }
];

export function ProjectsSlider() {
  const { i18n, t } = useTranslation();

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
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
            <Card className="h-full hover:shadow-xl transition-shadow duration-300">
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
                    >
                      <ExternalLink size={16} />
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      className="bg-white/90 backdrop-blur-sm"
                      onPress={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description[i18n.language as 'ru' | 'en']}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
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
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    color="primary"
                    variant="flat"
                    startContent={<ExternalLink size={14} />}
                    onPress={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1"
                  >
                    {t('projects.view')}
                  </Button>
                  <Button
                    size="sm"
                    variant="bordered"
                    startContent={<Github size={14} />}
                    onPress={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1"
                  >
                    {t('projects.code')}
                  </Button>
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
