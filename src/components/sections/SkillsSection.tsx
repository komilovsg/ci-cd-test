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
      { name: 'TypeScript', level: 95 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'SCSS', level: 90 },
      { name: 'JavaScript', level: 90 }
    ],
    backend: [
      { name: 'Node.js/Express', level: 85 },
      { name: 'Supabase', level: 75 },
      { name: 'PHP', level: 30 },
      { name: 'Python', level: 30 },
      { name: 'Postman', level: 80 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'CI/CD', level: 85 },
      { name: 'Docker', level: 65 },
      { name: 'VS Code', level: 90 },
      { name: 'REST API', level: 90 }
    ]
  };

  return (
    <Section id="skills" className="py-16">
      <div>
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
