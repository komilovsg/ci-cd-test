"use client";

import { useTranslation } from 'react-i18next';
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ProjectsSlider } from "@/components/sections/ProjectsSlider";

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <Section className="space-y-6">
      <Heading level={2} className="text-center">
        {t('projects.title')}
      </Heading>
      <ProjectsSlider />
    </Section>
  );
}
