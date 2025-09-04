import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function Heading({ children, level = 2, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  const baseClasses = 'font-bold text-gray-900 dark:text-white';
  const sizeClasses = {
    1: 'text-4xl lg:text-6xl',
    2: 'text-2xl lg:text-3xl',
    3: 'text-xl lg:text-2xl',
    4: 'text-lg lg:text-xl',
    5: 'text-base lg:text-lg',
    6: 'text-sm lg:text-base',
  };

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}
