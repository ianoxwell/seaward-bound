import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Anchor, Compass, Map, Menu, Sailboat, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home', icon: Sailboat },
    { id: 'projects', label: 'Projects', icon: Compass },
    { id: 'companies', label: 'Experience', icon: Map },
    { id: 'skills', label: 'Skills', icon: Anchor }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-wave border-b border-border' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 text-primary hover:text-ocean-medium transition-colors duration-300"
            aria-label="Navigate to home section"
          >
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              <Anchor className="h-6 w-6" data-name="Anchor" />
            </motion.div>
            <span className="font-bold text-lg">Port Folio</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`nav-anchor flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === section.id ? 'text-primary active' : 'text-muted-foreground hover:text-primary'
                  }`}
                  aria-label={`Navigate to ${section.label} section`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          {isMenuOpen && (
            <div
              className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-wave border border-border transition-all duration-300  opacity-100 translate-y-0 visible"
              role="menu"
            >
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-300 ${
                      activeSection === section.id
                        ? 'text-primary bg-secondary/50'
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/30'
                    }`}
                    role="menuitem"
                    aria-label={`Navigate to ${section.label} section`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
