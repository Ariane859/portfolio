import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Menu, X, ArrowRight, Github, Linkedin, Download, Code2
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#F2EDE4] relative overflow-x-hidden">
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      {/* Navigation */}
      <Navigation scrolled={scrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <HeroSection />

      {/* Stack Section */}
      <StackSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Process Section */}
      <ProcessSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Navigation({ scrolled, mobileMenuOpen, setMobileMenuOpen }: any) {
  return (
    <motion.nav
      initial={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0E0E0E]/92 backdrop-blur-xl border-b border-[#2A2A2A]' : 'bg-transparent'
      }`}
      style={{ height: scrolled ? '64px' : '104px', transition: 'height 0.3s ease' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-20 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <img src={`${import.meta.env.BASE_URL}Images/logo.svg`} alt="Logo" className="w-auto" style={{ height: scrolled ? '44px' : '96px', transition: 'height 0.3s ease' }} />
          <div className={`font-['DM_Mono'] text-[12px] text-[#8C8880] overflow-hidden transition-all duration-200 ${scrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-[20px] opacity-100 mt-[-24px]'}`}>Fullstack Developer</div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 self-center">
          {[
            { label: 'Accueil', href: 'accueil' },
            { label: 'Stack', href: 'stack' },
            { label: 'Projets', href: 'projets' },
            { label: 'Services', href: 'services' },
            { label: 'À Propos', href: 'about' },
            { label: 'Contact', href: 'contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              className="font-['DM_Mono'] text-[13px] tracking-[0.06em] text-[#F2EDE4] hover:text-[#C49A3C] transition-colors relative group"
            >
              {label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#C49A3C] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 border-[1px] border-[#C49A3C] text-[#C49A3C] hover:bg-[#C49A3C] hover:text-[#0E0E0E] transition-all duration-200 font-['DM_Mono'] text-[13px] self-center">
          Discutons
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#C49A3C]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden absolute top-[104px] left-0 right-0 bg-[#0E0E0E] border-b border-[#2A2A2A] p-8 pb-12"
          style={{ minHeight: 'calc(100vh - 104px)' }}
        >
          <div className="flex flex-col gap-6">
            {[
              { label: 'Accueil', href: 'accueil' },
              { label: 'Stack', href: 'stack' },
              { label: 'Projets', href: 'projets' },
              { label: 'Services', href: 'services' },
              { label: 'À Propos', href: 'about' },
              { label: 'Contact', href: 'contact' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={`#${href}`}
                className="font-['DM_Mono'] text-[18px] text-[#F2EDE4] hover:text-[#C49A3C] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center px-6 md:px-20 pt-28" id="accueil">
      {/* Background decorative text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 font-['Syne'] font-[800] text-[80px] sm:text-[130px] lg:text-[200px] text-[#151515] select-none pointer-events-none overflow-hidden whitespace-nowrap" style={{ transform: 'translateY(-50%) rotate(-3deg)' }}>
        FULLSTACK
      </div>

      <div className="max-w-[1280px] mx-auto w-full grid md:grid-cols-[55%_45%] gap-8 md:gap-12 relative z-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-['DM_Mono'] text-[12px] uppercase tracking-[0.08em] text-[#C49A3C]">
                Disponible pour missions — 2025
              </span>
              <div className="h-[1px] w-[40px] bg-[#C49A3C]" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            Je construis<br />
            des produits<br />
            web complets.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-['DM_Mono'] text-[16px] text-[#8C8880] max-w-[420px] mb-10"
            style={{ lineHeight: 1.7 }}
          >
            Du backend à l'interface, je conçois des applications robustes,
            scalables et pensées pour l'expérience utilisateur. Chaque ligne
            de code a un but.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button className="px-7 py-3.5 bg-[#C49A3C] text-[#0E0E0E] font-['Syne'] font-[500] text-[14px] hover:bg-[#D4AA52] transition-colors">
              Voir mes projets
            </button>
            <a href="#" className="flex items-center gap-2 text-[#F2EDE4] hover:text-[#C49A3C] transition-colors font-['DM_Mono'] text-[14px]">
              En savoir plus <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 md:gap-8"
          >
            <StatItem number="12+" label="Projets livrés" />
            <div className="w-[1px] self-stretch bg-[#2A2A2A]" />
            <StatItem number="4" label="ans d'expérience" />
            <div className="w-[1px] self-stretch bg-[#2A2A2A]" />
            <StatItem number="Full" label="Frontend + Backend" />
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-6 justify-center"
        >
          <div className="bg-[#161616] border border-[#2A2A2A] rounded-lg p-4 md:p-8 w-full overflow-hidden">
            <pre className="font-['DM_Mono'] text-[11px] sm:text-[13px] md:text-[14px] overflow-x-auto leading-relaxed">
              <code>
                <span className="text-[#C49A3C]">const</span> <span className="text-[#F2EDE4]">buildFullstack</span> <span className="text-[#8C8880]">=</span> <span className="text-[#C49A3C]">async</span> <span className="text-[#8C8880]">{'() => {'}</span>{'\n'}
                {'  '}<span className="text-[#C49A3C]">return</span> <span className="text-[#8C8880]">{'{'}</span>{'\n'}
                {'    '}<span className="text-[#F2EDE4]">frontend</span><span className="text-[#8C8880]">:</span> <span className="text-[#6B9E6B]">'React + TS'</span><span className="text-[#8C8880]">,</span>{'\n'}
                {'    '}<span className="text-[#F2EDE4]">backend</span><span className="text-[#8C8880]">:</span> <span className="text-[#6B9E6B]">'Node + SQL'</span><span className="text-[#8C8880]">,</span>{'\n'}
                {'    '}<span className="text-[#F2EDE4]">deploy</span><span className="text-[#8C8880]">:</span> <span className="text-[#6B9E6B]">'Docker'</span>{'\n'}
                {'  '}<span className="text-[#8C8880]">{'};'}</span>{'\n'}
                <span className="text-[#8C8880]">{'};'}</span>
              </code>
            </pre>
          </div>

          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'PostgreSQL', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-transparent border border-[#C49A3C] text-[#C49A3C] font-['DM_Mono'] text-[12px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-['Syne'] font-[700] text-[28px] text-[#C49A3C]">{number}</div>
      <div className="font-['DM_Mono'] text-[11px] text-[#8C8880]">{label}</div>
    </div>
  );
}

function StackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = {
    frontend: [
      { name: 'React / Next.js', proficiency: 95 },
      { name: 'TypeScript', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 92 },
      { name: 'Framer Motion', proficiency: 85 },
      { name: 'Figma', proficiency: 88 },
    ],
    backend: [
      { name: 'Node.js / Express', proficiency: 93 },
      { name: 'Python / FastAPI', proficiency: 87 },
      { name: 'PostgreSQL / MongoDB', proficiency: 90 },
      { name: 'Docker / Linux', proficiency: 85 },
      { name: 'REST API / GraphQL', proficiency: 91 },
    ],
  };

  const techMarquee = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Next.js', 'Python', 'Tailwind', 'GraphQL', 'MongoDB'];

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 md:px-20" id="stack">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="02" title="Stack" />
          <h2 className="mb-16">L'outillage qui fait tourner mes projets.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <SkillColumn title="FRONTEND" skills={skills.frontend} delay={0.2} isInView={isInView} />
          <SkillColumn title="BACKEND & INFRA" skills={skills.backend} delay={0.4} isInView={isInView} />
        </div>

        {/* Marquee */}
        <div className="bg-[#161616] border-y border-[#2A2A2A] py-6 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span key={i} className="inline-flex items-center gap-4">
                <span className="font-['DM_Mono'] text-[13px] text-[#8C8880]">{tech}</span>
                <span className="text-[#C49A3C]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

function SkillColumn({ title, skills, delay, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="font-['DM_Mono'] text-[14px] uppercase tracking-[0.08em] text-[#C49A3C] mb-8">
        {title}
      </h3>
      <div className="space-y-6">
        {skills.map((skill: any, i: number) => (
          <div key={skill.name} className="flex items-center gap-4">
            <div className="w-4 h-4 border border-[#C49A3C]" />
            <div className="flex-1">
              <div className="font-['DM_Mono'] text-[15px] text-[#F2EDE4] mb-2">{skill.name}</div>
              <div className="h-[2px] bg-[#2A2A2A] relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                  transition={{ duration: 1, delay: delay + i * 0.1 }}
                  className="h-full bg-[#C49A3C]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      number: '01',
      title: 'Développement Web Fullstack',
      description: 'De la base de données à l\'interface : je prends en charge l\'ensemble du cycle de développement de votre application.',
      tags: ['React', 'Node.js', 'SQL'],
    },
    {
      number: '02',
      title: 'Conception d\'API & Architecture',
      description: 'Des API RESTful ou GraphQL bien documentées, performantes et pensées pour évoluer avec votre produit.',
      tags: ['REST', 'GraphQL', 'PostgreSQL'],
    },
    {
      number: '03',
      title: 'Intégration UI et Optimisation',
      description: 'Transformer vos maquettes en interfaces pixel-perfect, rapides et accessibles, avec une attention particulière aux performances.',
      tags: ['Next.js', 'TypeScript', 'Figma'],
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 md:px-20" id="services">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="03" title="Services" />
          <h2 className="mb-16">Ce que je peux construire pour vous.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} delay={i * 0.2} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#161616] border border-[#2A2A2A] hover:border-[#3A3A3A] rounded-lg p-8 relative transition-all duration-300 group"
    >
      <div className="absolute top-8 right-8 font-['Syne'] font-[800] text-[56px] text-[#C49A3C] opacity-30">
        {service.number}
      </div>

      <h3 className="font-['Syne'] font-[700] text-[22px] mb-4 relative z-10">
        {service.title}
      </h3>

      <p className="font-['DM_Mono'] text-[14px] text-[#8C8880] mb-6 relative z-10" style={{ lineHeight: 1.7 }}>
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {service.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-3 py-1 bg-transparent border border-[#C49A3C]/30 text-[#C49A3C] font-['DM_Mono'] text-[11px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-[#C49A3C] font-['DM_Mono'] text-[13px] group-hover:gap-3 transition-all"
      >
        En savoir plus
        <ArrowRight size={14} className={isHovered ? 'translate-x-1' : ''} style={{ transition: 'transform 0.3s' }} />
      </a>
    </motion.div>
  );
}

function ProjectsSection({ activeFilter, setActiveFilter }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filters = ['Tous', 'Frontend', 'Fullstack', 'API'];

  const projects = [
    {
      category: 'FULLSTACK',
      title: 'Plateforme SaaS de gestion RH',
      description: 'Application fullstack avec dashboard analytique, authentification JWT et rôles granulaires.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      category: 'API',
      title: 'API e-commerce haute performance',
      description: 'Architecture RESTful avec cache Redis, paiement Stripe intégré et documentation Swagger.',
      stack: ['Express', 'MongoDB', 'Redis', 'Stripe'],
    },
    {
      category: 'FRONTEND',
      title: 'Application mobile cross-platform',
      description: 'Interface React Native connectée à un backend GraphQL, déployée sur iOS et Android.',
      stack: ['React Native', 'GraphQL', 'TypeScript'],
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 md:px-20" id="projets">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="04" title="Projets" />
          <h2 className="mb-12">Des produits qui fonctionnent en production.</h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 font-['DM_Mono'] text-[13px] transition-all ${
                activeFilter === filter
                  ? 'bg-[#C49A3C] text-[#0E0E0E]'
                  : 'bg-[#1F1F1F] border border-[#2A2A2A] text-[#8C8880] hover:border-[#C49A3C]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.2} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-[#161616] border border-[#2A2A2A] hover:border-[#3A3A3A] rounded-lg overflow-hidden transition-all duration-300 ${
        isHovered ? 'transform translate-y-[-4px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : ''
      }`}
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-[#1F1F1F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #2A2A2A 10px, #2A2A2A 11px)',
        }} />
        <span className="absolute top-4 left-4 px-3 py-1 bg-[#C49A3C]/20 border border-[#C49A3C] text-[#C49A3C] font-['DM_Mono'] text-[11px] uppercase">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-['Syne'] font-[700] text-[22px] mb-3">
          {project.title}
        </h3>

        <p className="font-['DM_Mono'] text-[14px] text-[#8C8880] mb-4" style={{ lineHeight: 1.7 }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-transparent border border-[#C49A3C]/30 text-[#C49A3C] font-['DM_Mono'] text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-[#C49A3C] font-['DM_Mono'] text-[13px]">
            Voir le projet <ArrowRight size={14} />
          </a>
          <a href="#" className="text-[#8C8880] hover:text-[#C49A3C] transition-colors font-['DM_Mono'] text-[13px]">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      number: '01',
      title: 'Découverte',
      description: 'Comprendre votre métier, vos contraintes techniques et vos objectifs avant d\'écrire la première ligne de code.',
    },
    {
      number: '02',
      title: 'Architecture',
      description: 'Concevoir une structure solide : choix technologiques, schéma de base de données, découpage des composants.',
    },
    {
      number: '03',
      title: 'Développement',
      description: 'Itérations courtes, code documenté, tests réguliers et communication continue sur l\'avancement.',
    },
    {
      number: '04',
      title: 'Livraison',
      description: 'Déploiement, documentation technique, passation propre et suivi post-lancement si nécessaire.',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="05" title="Process" />
          <h2 className="mb-16">Comment je travaille.</h2>
        </motion.div>

        <div className="hidden md:flex gap-8 relative">
          {/* Dashed line connector */}
          <div className="absolute top-6 left-0 right-0 h-[2px] border-t-2 border-dashed border-[#C49A3C] opacity-30" />

          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} delay={i * 0.2} isInView={isInView} />
          ))}
        </div>

        {/* Mobile: Vertical layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} delay={i * 0.2} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, delay, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex-1 relative"
    >
      <div className="font-['Syne'] font-[800] text-[40px] text-[#C49A3C] mb-4">
        {step.number}
      </div>
      <h3 className="font-['Syne'] font-[700] text-[18px] mb-3">
        {step.title}
      </h3>
      <p className="font-['DM_Mono'] text-[14px] text-[#8C8880]" style={{ lineHeight: 1.7 }}>
        {step.description}
      </p>
    </motion.div>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 md:px-20" id="about">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="06" title="À Propos" />
        </motion.div>

        <div className="grid md:grid-cols-[40%_60%] gap-12">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] md:aspect-[3/4] bg-[#1F1F1F] border border-[#C49A3C] rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 size={64} className="text-[#2A2A2A]" />
              </div>
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#C49A3C] text-[#0E0E0E] font-['DM_Mono'] text-[11px] rounded">
                #disponible
              </span>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="font-['DM_Mono'] text-[12px] uppercase tracking-[0.08em] text-[#C49A3C] mb-4">
              La personne derrière le code
            </div>

            <h2 className="font-['Syne'] font-[700] text-[28px] md:text-[40px] mb-8" style={{ lineHeight: 1.2 }}>
              Développeuse Fullstack, passionnée par les systèmes bien conçus.
            </h2>

            <div className="space-y-6 mb-10">
              <p className="font-['DM_Mono'] text-[15px] text-[#F2EDE4]" style={{ lineHeight: 1.7 }}>
                Je m'appelle [Prénom]. Je développe des applications web complètes depuis
                4 ans, avec une approche centrée sur la qualité du code, la robustesse
                des architectures et la valeur délivrée à l'utilisateur final.
              </p>

              <p className="font-['DM_Mono'] text-[15px] text-[#8C8880]" style={{ lineHeight: 1.7 }}>
                J'aime autant concevoir une API propre que peaufiner une interface.
                Ce qui me motive : résoudre des problèmes réels avec des outils
                bien choisis.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <StatItem number="100%" label="Satisfaction client" />
              <div className="w-[1px] bg-[#2A2A2A]" />
              <StatItem number="24h" label="Temps de réponse" />
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Ariane859"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C49A3C] text-[#C49A3C] hover:bg-[#C49A3C] hover:text-[#0E0E0E] transition-all font-['DM_Mono'] text-[13px]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ariane-laura-d-almeida-9976bb207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C49A3C] text-[#C49A3C] hover:bg-[#C49A3C] hover:text-[#0E0E0E] transition-all font-['DM_Mono'] text-[13px]"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C49A3C] text-[#C49A3C] hover:bg-[#C49A3C] hover:text-[#0E0E0E] transition-all font-['DM_Mono'] text-[13px]"
              >
                <Download size={16} /> Télécharger mon CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="bg-[#161616] border-t border-[#2A2A2A] py-16 md:py-32 px-6 md:px-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[680px] mx-auto text-center"
      >
        <h2 className="font-['Syne'] font-[800] text-[40px] md:text-[56px] lg:text-[64px] mb-6" style={{ lineHeight: 1.1 }}>
          Un projet en tête ?
        </h2>

        <p className="font-['DM_Mono'] text-[16px] text-[#8C8880] mb-10" style={{ lineHeight: 1.7 }}>
          Je suis disponible pour des missions freelance ou des opportunités
          en CDI. Parlons de ce que vous construisez.
        </p>

        <button className="px-10 py-[18px] bg-[#C49A3C] text-[#0E0E0E] font-['Syne'] font-[500] text-[16px] hover:bg-[#D4AA52] transition-colors mb-6">
          M'écrire un message
        </button>

        <div>
          <a
            href="mailto:contact@dev.com"
            className="font-['DM_Mono'] text-[14px] text-[#C49A3C] hover:underline"
          >
            contact@dev.com
          </a>
        </div>

        <p className="font-['DM_Mono'] text-[12px] text-[#8C8880] mt-4">
          Réponse sous 24 heures en général.
        </p>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0E0E0E] border-t border-[#2A2A2A] px-6 md:px-20 py-8">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-8 md:gap-0">
        {/* Logo */}
        <div>
          <img src={`${import.meta.env.BASE_URL}Images/logo.svg`} alt="Logo" className="h-[48px] w-auto" />
          <div className="font-['DM_Mono'] text-[12px] text-[#8C8880] mt-[-8px]">Fullstack Developer</div>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 justify-start md:justify-center items-center">
          {[
            { label: 'Accueil', href: 'accueil' },
            { label: 'Stack', href: 'stack' },
            { label: 'Projets', href: 'projets' },
            { label: 'Services', href: 'services' },
            { label: 'À Propos', href: 'about' },
            { label: 'Contact', href: 'contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              className="font-['DM_Mono'] text-[12px] text-[#8C8880] hover:text-[#C49A3C] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:items-end gap-3">
          <div className="flex gap-4">
            <a href="https://github.com/Ariane859" target="_blank" rel="noopener noreferrer" className="text-[#8C8880] hover:text-[#C49A3C] transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ariane-laura-d-almeida-9976bb207" target="_blank" rel="noopener noreferrer" className="text-[#8C8880] hover:text-[#C49A3C] transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
          <div className="font-['DM_Mono'] text-[11px] text-[#8C8880]">
            Fait avec précision en 2025
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-['DM_Mono'] text-[12px] uppercase tracking-[0.08em] text-[#C49A3C]">
        {number} — {title}
      </span>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        transition={{ duration: 0.8 }}
        className="h-[1px] bg-[#C49A3C]"
      />
    </div>
  );
}
