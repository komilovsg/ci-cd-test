"use client";

import { useTranslation } from 'react-i18next';
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { SkillGroup } from "@/components/sections/SkillGroup";

export function SkillsSection() {
  const { t } = useTranslation();

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

  return (
    <Section id="skills" className="flex-1 py-8">
      <div className="h-full">
        <Heading level={2} className="text-center mb-8">
          {t('skills.title')}
        </Heading>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SkillGroup 
            title={t('skills.frontend')} 
            skills={skills.frontend} 
            color="primary" 
          />
          <SkillGroup 
            title={t('skills.backend')} 
            skills={skills.backend} 
            color="secondary" 
          />
          <SkillGroup 
            title={t('skills.tools')} 
            skills={skills.tools} 
            color="success" 
          />
        </div>
      </div>
    </Section>
  );
}
