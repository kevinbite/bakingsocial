'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'experience', label: 'Experience' },
  { id: 'atmosphere', label: 'Atmosphere' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'social', label: 'Social' },
  { id: 'private', label: 'Private' },
  { id: 'contact', label: 'Contact' },
];

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-6"
      )}
      aria-label="Page sections"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-4"
          aria-current={activeSection === section.id ? 'true' : undefined}
        >
          {/* Label - always visible */}
          <span className={cn(
            "text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300",
            activeSection === section.id 
              ? "text-tbs-gold" 
              : "text-tbs-champagne/50 group-hover:text-tbs-champagne"
          )}>
            {section.label}
          </span>
          
          {/* Dot */}
          <span className={cn(
            "nav-dot transition-all duration-300",
            activeSection === section.id && "active scale-125"
          )} />
        </a>
      ))}

      {/* Vertical Line */}
      <div className="absolute right-[3px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-tbs-gold/10 to-transparent -z-10" />
    </nav>
  );
}
