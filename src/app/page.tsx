"use client";

import { Button, Card, CardBody, Chip, Avatar, Progress } from "@heroui/react";
import { Header } from "@/components/header";
import { ProjectsSlider } from "@/components/projects-slider";
import { useLanguage } from "@/contexts/language-context";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Github, 
  Linkedin, 
  Twitter,
  Heart 
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  const skills = {
    frontend: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Vue.js', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 70 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 85 }
    ]
  };

  const stats = [
    { label: t('about.experience'), value: '5+' },
    { label: t('about.projects'), value: '50+' },
    { label: t('about.clients'), value: '30+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden">
      <Header />
      
      {/* Main Content - Single Page Layout */}
      <div className="h-[calc(100vh-4rem)] flex flex-col">
        
        {/* Hero Section */}
        <section id="about" className="flex-1 flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {t('hero.greeting')}
                  </p>
                  <h1 className="text-4xl lg:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      {t('hero.name')}
                    </span>
                  </h1>
                  <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-semibold">
                    {t('hero.title')}
                  </h2>
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
                    <Card key={index} className="text-center p-4">
                      <CardBody className="p-0">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Projects Section */}
        <section id="skills" className="flex-1 py-8">
          <div className="container mx-auto px-4 h-full">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-full">
              
              {/* Skills */}
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-center">
                  {t('skills.title')}
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      {t('skills.frontend')}
                    </h3>
                    <div className="space-y-3">
                      {skills.frontend.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} size="sm" color="primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">
                      {t('skills.backend')}
                    </h3>
                    <div className="space-y-3">
                      {skills.backend.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} size="sm" color="secondary" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-green-600 dark:text-green-400">
                      {t('skills.tools')}
                    </h3>
                    <div className="space-y-3">
                      {skills.tools.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} size="sm" color="success" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Projects */}
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-center">
                  {t('projects.title')}
                </h2>
                <ProjectsSlider />
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Footer */}
        <section id="contact" className="py-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Contact Info */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  {t('contact.title')}
                </h2>
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
                <h3 className="font-semibold mb-4">Технологии проекта</h3>
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
          </div>
        </section>
      </div>
    </div>
  );
}
