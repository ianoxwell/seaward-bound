import Companies from '@/components/Companies';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { useAnchorChain } from '@/hooks/useAnchorChain';
import { useHeaderPulse } from '@/hooks/useHeaderPulse';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useState } from 'react';
import sandyBottom from '@/assets/sandy-bottom.png';

const Index = () => {
  const sectionIds = ['hero', 'projects', 'companies', 'skills'];
  const activeSection = useScrollSpy(sectionIds);
  const [, setCurrentSection] = useState('hero');

  // Initialize scroll animations and effects
  useScrollAnimation();
  useHeaderPulse();
  useAnchorChain();

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Main Content */}
      <main role="main">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <Projects />

        {/* Companies Section */}
        <Companies />

        {/* Skills Section */}
        <Skills />
      </main>

      {/* Footer */}
      <footer
        className="relative text-accent-foreground py-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${sandyBottom})` }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-sm opacity-90">© 2025 Ian Oxwell. Charting digital courses with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
