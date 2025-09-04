import { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-8 lg:py-12 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
