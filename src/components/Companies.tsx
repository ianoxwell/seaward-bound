import cewaLogo from '@/assets/CEWA-Logo.jpg';
import dialogLogo from '@/assets/Dialog-logo.png';
import hccLogo from '@/assets/hcc-logo.png';
import rollerLogo from '@/assets/roller-logo.jpg';
import stMarys from '@/assets/stmarys-logo.jpg';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  website: string;
}

const companies: Company[] = [
  {
    id: 'cewa',
    name: 'Catholic Education Western Australia',
    role: 'Freelance Full Stack Developer',
    period: '2025 - Present',
    description: `Supporting Catholic Education WA's internal applications for secondary schools across the state. Engaged in various short-term and exploratory projects to maintain and enhance bespoke tools.`,
    logo: cewaLogo,
    website: 'https://www.cewa.edu.au/'
  },
  {
    id: 'roller',
    name: 'Roller',
    role: 'Senior Full Stack Developer (Front end specialist)',
    period: '2021 - 2024',
    description: `At Roller, Ian led the rebuild of a mobile-first checkout in Angular 14 and co-designed a hybrid migration for the core app, while improving accessibility, test coverage, and mentoring developers.`,
    logo: rollerLogo,
    website: 'https://www.roller.software/'
  },
  {
    id: 'dialog',
    name: 'DialogIT',
    role: 'Full Stack Developer',
    period: '2019 - 2021',
    description: `At DialogIT, Ian led frontend delivery for key Queensland Health projects, building accessible Angular apps that improved transparency, automated workflows, and saved staff time.`,
    logo: dialogLogo,
    website: 'https://www.ncs.co/en-au/?redirectFrom=Dialog-Group'
  },
  {
    id: 'hcc',
    name: 'Holy Cross College',
    role: 'IT Manager',
    period: '2012 - 2019',
    description: `At Holy Cross College, Ian served as the founding IT Manager during a period of rapid growth, developing custom AngularJS apps and a secure SharePoint intranet, while leading a small team to deliver user-friendly, school-wide IT services.`,
    logo: hccLogo,
    website: 'https://www.holycross.wa.edu.au/'
  },
  {
    id: 'stMarys',
    name: `St Mary's Anglican Girls' School`,
    role: 'Software Engineer Intern',
    period: '2008 - 2012',
    description: `Ian built a VB.NET electronic attendance system integrated with Synergetic, co-developed a live-scoring sports carnival app in FileMaker, and produced help-desk video tutorials to streamline staff support and workflows.`,
    logo: stMarys,
    website: 'https://www.stmarys.wa.edu.au/'
  }
];

const Companies = () => {
  return (
    <section
      id="companies"
      className="py-20 lg:py-32 bg-gradient-to-b from-seafoam/20 to-background"
      aria-labelledby="companies-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Map className="h-8 w-8 text-primary mr-3 animate-gentle-float" />
            <h2 id="companies-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Trusted Harbors
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Throughout my voyage as a developer, I’ve had the privilege of collaborating with exceptional teams and delivering impactful projects across the education, health, and tech sectors.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <Card
              key={company.id}
              className={`group hover:shadow-deep transition-all duration-500 anchor-hover border-border bg-card/80 backdrop-blur-sm fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Company Logo/Icon */}
                  <div className="flex-shrink-0">
                    {/* <motion.div
                      className="w-12 h-12 bg-gradient-wave rounded-lg flex items-center justify-center text-2xl"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    > */}
                    <img src={company.logo} height={48} width={48} alt={`${company.name} logo`} />
                    {/* </motion.div> */}
                  </div>

                  {/* Company Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-primary group-hover:text-ocean-medium transition-colors duration-300 mb-1">
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        aria-label={`Visit ${company.name} website (opens in new tab)`}
                      >
                        {company.name}
                      </a>
                    </h3>

                    <div className="text-sm text-ocean-medium font-semibold mb-1">{company.role}</div>

                    <div className="text-xs text-muted-foreground mb-3 font-mono">{company.period}</div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{company.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-wave rounded-2xl p-8 max-w-2xl mx-auto shadow-wave">
            <h3 className="text-2xl font-bold text-primary mb-4">Journey Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-medium mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years IT Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-medium mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-medium mb-2">5</div>
                <div className="text-sm text-muted-foreground">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ocean-medium mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Learning Mindset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
