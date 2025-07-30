import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, ExternalLink, Github } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'ros',
    title: 'Recipe Ordering Simplified (ROS)',
    description:
      'A full-stack tool for efficient meal planning and pantry prep, Recipe Ordering Simplified calculates ingredients, converts units, React version.',
    image: [project1Image, project3Image],
    technologies: ['React', 'TypeScript', 'NestJs', 'Node.js', 'PostgreSQL', 'TypeORM'],
    githubUrl: 'https://github.com/ianoxwell/ros',
    liveUrl: 'https://ianoxwell.github.io/ros/react-app',
    featured: true
  },
  {
    id: 'quickbeanCheckout',
    title: 'QuickBean Checkout',
    description:
      'A streamlined checkout process for QuickBean, enhancing user experience and reducing cart abandonment.',
    image: [project1Image],
    technologies: ['React', 'TypeScript', 'NestJs', 'PostgreSQL', 'TypeORM', 'Vercel'],
    githubUrl: 'https://github.com/ianoxwell/QuickBean',
    liveUrl: 'https://quickbeancheckout.vercel.app/downtown-coffee-bar/dcb-checkout/menu',
    featured: true
  },
  {
    id: 'quickbeanAdmin',
    title: 'QuickBean Admin',
    description: 'An admin dashboard for QuickBean, providing insights and management tools and KDS for store owners.',
    image: [project1Image],
    technologies: ['React', 'TypeScript', 'NestJs', 'PostgreSQL', 'TypeORM', 'Vercel'],
    githubUrl: 'https://github.com/ianoxwell/QuickBean',
    liveUrl: 'https://quickbeanadmin.vercel.app/downtown-coffee-bar/login',
    featured: true
  },
  {
    id: 'proVisionAngular',
    title: 'Provision Cookbook',
    description:
      'A full-stack tool for efficient meal planning and provisioning prep, Provision Cookbook calculates ingredients, converts units, Angular version.',
    image: [project2Image],
    technologies: ['Angular', 'TypeScript', 'NestJs', 'Node.js', 'PostgreSQL', 'TypeORM'],
    githubUrl: 'https://github.com/ianoxwell/ros/tree/main/ros.angular',
    liveUrl: 'https://ianoxwell.github.io/ros/angular-app',
    featured: false
  },
  {
    id: 'WCAGAngular',
    title: 'WCAG Angular Material',
    description:
      'This project is aimed to test and demonstrate getting some simple pages in a SPA to comply with WCAG 2.1AA standards for web accessibility.',
    image: [project3Image],
    technologies: ['Angular', 'TypeScript', 'Angular Material', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/ianoxwell/WCAGAngularMaterial',
    liveUrl: 'https://ianoxwell.github.io/WCAGAngularMaterial/WCAGAngularMaterial/forms',
    featured: false
  }
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
            <h2 id="projects-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Charted Courses
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            These projects chart my journey through the ever-evolving waters of tech—each one a milestone in
            exploration, learning, and building.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-deep transition-all duration-500 anchor-hover border-border bg-card/80 backdrop-blur-sm fade-in-up pt-0`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <Carousel
                id={`project-carousel-${project.id}`}
                aria-label={`carousel for ${project.title}`}
                className="relative w-full rounded-t-lg"
                opts={{
                  align: 'start',
                  loop: true
                }}
              >
                <CarouselContent className="rounded-t-lg">
                  {project.image.map((img, imgIndex) => (
                    <CarouselItem key={`${project.id}-img-${imgIndex}`} className="overflow-hidden rounded-t-lg">
                      <img
                        src={img}
                        alt={`Screenshot of ${project.title} application interface`}
                        className="rounded-t-lg w-full h-48 object-cover"
                      />
                    </CarouselItem>
                  ))}
                  {/* <img
                    src={project.image}
                    alt={`Screenshot of ${project.title} application interface`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  /> */}
                </CarouselContent>
                {project.image.length > 1 && (
                  <>
                    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
                  </>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-sand text-ocean-deep px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </Carousel>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-primary group-hover:text-ocean-medium transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="mb-6">
                  <div className="font-semibold text-primary mb-3">Technologies</div>
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
          <p className="text-muted-foreground mb-6">Want to see more projects or collaborate on something new?</p>
          <Button
            variant="outline"
            size="lg"
            className="anchor-hover border-primary text-primary hover:bg-primary hover:text-accent-foreground px-8 py-3"
            asChild
          >
            <a
              href="https://github.com/ianoxwell"
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
