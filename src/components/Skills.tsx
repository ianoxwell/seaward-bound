import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Anchor, Cloud, Code, Compass, Database, Palette, Ship, Smartphone, Users, Waves } from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ElementType;
  description: string;
  technologies: string[];
  color: string;
}

const skills: Skill[] = [
  {
    category: 'Frontend Development',
    icon: Code,
    description: 'Creating engaging and responsive user interfaces with modern frameworks and best practices.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Sass'],
    color: 'text-blue-600'
  },
  {
    category: 'Backend Development',
    icon: Database,
    description: 'Building robust server-side applications, APIs, and database architectures that scale.',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    color: 'text-green-600'
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    description: 'Developing cross-platform mobile applications with native performance and user experience.',
    technologies: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android', 'PWA'],
    color: 'text-purple-600'
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Deploying and managing applications in the cloud with modern DevOps practices.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Vercel'],
    color: 'text-orange-600'
  },
  {
    category: 'UI/UX Design',
    icon: Palette,
    description: 'Designing intuitive and accessible user experiences with a focus on usability and aesthetics.',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Accessibility'],
    color: 'text-pink-600'
  },
  {
    category: 'Team Leadership',
    icon: Users,
    description: 'Leading development teams, mentoring developers, and driving technical strategy.',
    technologies: ['Agile', 'Scrum', 'Code Review', 'Mentoring', 'Technical Planning', 'Stakeholder Communication'],
    color: 'text-indigo-600'
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-seafoam/20"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Anchor className="h-8 w-8 text-primary mr-3 animate-gentle-float" />
            <h2 id="skills-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              What I Can Do for You
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Like a well-equipped vessel ready for any voyage, I bring a comprehensive toolkit of skills to navigate your
            project from concept to completion.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.category}
                className={`group hover:shadow-deep transition-all duration-500 anchor-hover border-border bg-card/80 backdrop-blur-sm fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-wave rounded-lg group-hover:animate-gentle-float">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-ocean-medium transition-colors duration-300">
                      {skill.category}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{skill.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Offerings */}
        <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-ocean rounded-2xl p-8 lg:p-12 text-center shadow-deep">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="relative h-10 w-10 mr-4">
                  <Compass className="h-10 w-10 text-primary-foreground compass-rotate" />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-primary-foreground">
                    N
                  </div>
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs font-bold text-primary-foreground">
                    E
                  </div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-primary-foreground">
                    S
                  </div>
                  <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs font-bold text-primary-foreground">
                    W
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground">Ready to Set Sail Together?</h3>
              </div>

              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Whether you need a complete web application, mobile app, or just want to modernize your existing
                systems, I'm here to guide your project to success. Let's chart a course that brings your vision to
                life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Anchor className="h-8 w-8 text-primary-foreground mx-auto mb-3 animate-gentle-float" />
                  <h4 className="font-semibold text-primary-foreground mb-2">Full-Stack Development</h4>
                  <p className="text-sm text-primary-foreground/80">End-to-end solutions from database to UI</p>
                </div>
                <div className="text-center">
                  <Waves
                    className="h-8 w-8 text-primary-foreground mx-auto mb-3 animate-gentle-float"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <h4 className="font-semibold text-primary-foreground mb-2">Consulting & Architecture</h4>
                  <p className="text-sm text-primary-foreground/80">Strategic planning and technical guidance</p>
                </div>
                <div className="text-center">
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
                  >
                    <Ship className="h-8 w-8 text-primary-foreground mx-auto mb-3" />
                  </motion.div>
                  <h4 className="font-semibold text-primary-foreground mb-2">Team Leadership</h4>
                  <p className="text-sm text-primary-foreground/80">Leading development teams to success</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="anchor-hover px-8 py-3" asChild>
                  <a href="mailto:ianoxwell@gmail.com" aria-label="Send email to start project discussion">
                    Start a Conversation
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="anchor-hover border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3"
                  asChild
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download detailed resume (opens PDF in new tab)"
                  >
                    View My Experience
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
