import { Progress } from "@heroui/react";
import { Skill } from "@/types";

interface SkillGroupProps {
  title: string;
  skills: Skill[];
  color: 'primary' | 'secondary' | 'success';
}

export function SkillGroup({ title, skills, color }: SkillGroupProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">
        {title}
      </h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} size="sm" color={color} />
          </div>
        ))}
      </div>
    </div>
  );
}
