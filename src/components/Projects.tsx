import { ExternalLink, Github, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'oceananalytics',
    title: 'Ocean Analytics Dashboard',
    description: 'A comprehensive data visualization platform for maritime analytics. Built with React, D3.js, and Node.js to help shipping companies track vessel performance and optimize routes.',
    image: project1Image,
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://oceananalytics.demo.com',
    featured: true,
  },
  {
    id: 'tidalpay',
    title: 'TidalPay E-commerce',
    description: 'A modern e-commerce platform with seamless payment integration. Features include inventory management, real-time notifications, and responsive design for optimal mobile experience.',
    image: project2Image,
    technologies: ['Next.js', 'Stripe', 'Prisma', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://tidalpay.demo.com',
    featured: true,
  },
  {
    id: 'harbortask',
    title: 'Harbor Task Manager',
    description: 'A collaborative project management tool designed for maritime teams. Features real-time collaboration, task tracking, and integration with popular communication tools.',
    image: project3Image,
    technologies: ['Vue.js', 'Firebase', 'Socket.io', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://harbortask.demo.com',
    featured: true,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-seafoam/20"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Compass className="h-8 w-8 text-primary mr-3 compass-rotate" />
            <h2
              id="projects-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
            >
              Charted Courses
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the digital voyages I've embarked upon. Each project represents 
            a unique journey through the vast ocean of technology and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-deep transition-all duration-500 anchor-hover border-border bg-card/80 backdrop-blur-sm fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title} application interface`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-sand text-ocean-deep px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-primary group-hover:text-ocean-medium transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-gradient-ocean hover:opacity-90 text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title} (opens in new tab)`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Want to see more projects or collaborate on something new?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="anchor-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub (opens in new tab)"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;