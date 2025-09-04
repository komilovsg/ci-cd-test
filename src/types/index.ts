export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: {
    ru: string;
    en: string;
  };
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Stat {
  label: string;
  value: string;
}

export type Theme = 'light' | 'dark' | 'system';
export type Language = 'ru' | 'en';
