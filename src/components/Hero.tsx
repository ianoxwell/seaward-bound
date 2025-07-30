import heroImage from '@/assets/hero-nautical.png';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nautical background with gentle waves"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 fade-in-up"
          >
            Ian Oxwell
          </h1>

          {/* Role/Title */}
          <div className="fade-in-up mb-8" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-ocean-medium font-medium mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with the precision of a seasoned navigator. 
              Building robust applications that chart new courses in technology.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              variant="default"
              size="lg"
              className="anchor-hover bg-gradient-ocean hover:opacity-90 text-primary-foreground px-6 py-3"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile (opens in new tab)"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="anchor-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3"
              asChild
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume (opens PDF in new tab)"
              >
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToProjects}
            animate={{ y: [-4, 4, -4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.6,
            }}
            aria-label="Scroll to projects section"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300 mx-auto" />
          </motion.button>
        </div>
      </div>

      {/* Decorative Wave Border */}
      <div className="absolute bottom-0 left-0 right-0 wave-border h-1" />
    </section>
  );
};

export default Hero;