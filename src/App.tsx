import { useEffect, useState } from 'react'

type Language = 'en' | 'pt' | 'es'
type Theme = 'light' | 'dark'

type Experience = {
  company: string
  role: string
  period: string
  summary: string
  skills: string[]
}

type Content = {
  nav: { about: string; experience: string; expertise: string; education: string }
  controls: { language: string; theme: string; light: string; dark: string }
  hero: {
    eyebrow: string
    title: string
    intro: string
    contact: string
    imageAlt: string
    availability: string
  }
  about: { label: string; title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  experience: { label: string; title: string; intro: string; items: Experience[] }
  expertise: {
    label: string
    title: string
    groups: { number: string; title: string; description: string; skills: string[] }[]
  }
  education: {
    label: string
    title: string
    items: { institution: string; course: string; period: string }[]
    languagesTitle: string
    languages: string
  }
  footer: { eyebrow: string; title: string; text: string; email: string; linkedin: string; rights: string }
}

const content: Record<Language, Content> = {
  en: {
    nav: { about: 'About', experience: 'Experience', expertise: 'Expertise', education: 'Education' },
    controls: { language: 'Language', theme: 'Theme', light: 'Use light theme', dark: 'Use dark theme' },
    hero: {
      eyebrow: 'Full-stack software engineer · Brazil',
      title: 'I build reliable software for complex, real-world domains.',
      intro:
        'Full-stack engineer focused on modernizing critical systems and creating digital products across finance, justice and public services.',
      contact: 'Get in touch',
      imageAlt: 'Portrait of Jefferson Thiago',
      availability: 'Java · TypeScript · Cloud',
    },
    about: {
      label: '01 / About',
      title: 'Engineering with context, clarity and purpose.',
      paragraphs: [
        'My work sits at the intersection of solid backend engineering, thoughtful interfaces and complex business domains. I have experience evolving legacy platforms, designing distributed solutions and delivering products where reliability matters.',
        'I am comfortable moving between architecture and implementation, collaborating with multidisciplinary teams and translating domain needs into maintainable software.',
      ],
      stats: [
        { value: '4+', label: 'years building software' },
        { value: '06', label: 'professional experiences' },
        { value: '02', label: 'languages' },
      ],
    },
    experience: {
      label: '02 / Experience',
      title: 'Selected experience',
      intro: 'A career shaped by modernization, high-impact public services and mission-critical financial systems.',
      items: [
        {
          company: 'CI&T',
          role: 'Full-stack Systems Analyst',
          period: 'Aug 2024 — Present',
          summary:
            'Development and evolution of systems for a large financial institution in the equities and fund custody domain. I work on highly critical, distributed applications that require precision, reliability and traceability.',
          skills: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Kafka', 'Azure', 'SQL Server'],
        },
        {
          company: 'FUNPEC / UFRN · MPT-SEAP',
          role: 'Full-stack Developer',
          period: 'Apr 2025 — Apr 2026',
          summary:
            'Built a platform supporting the inclusion of incarcerated people in the labor market. Developed features for publishing opportunities and matching profiles using generative AI and vector search.',
          skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'LLMs', 'Qdrant'],
        },
        {
          company: 'FUNPEC / UFRN · Smart Prison',
          role: 'Full-stack Developer',
          period: 'Jun 2024 — Jan 2025',
          summary:
            'Developed an end-to-end administration system for correctional facilities in Rio Grande do Norte, supporting operational processes with consistent data and domain-oriented business rules.',
          skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
        },
        {
          company: 'FUNPEC / UFRN · Rural Development',
          role: 'Full-stack Developer',
          period: 'Mar 2024 — Jun 2024',
          summary:
            'Helped modernize a state government platform, gradually migrating a PHP monolith toward a service-oriented architecture with a new React interface.',
          skills: ['PHP', 'Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
        },
        {
          company: 'Lampp-IT Solutions',
          role: 'Full-stack Systems Analyst',
          period: 'Jan 2022 — Jul 2024',
          summary:
            'Maintained and evolved systems for the Court of Justice of Rio Grande do Norte. Supported critical legacy applications while progressively moving modules to modern architectures and technologies.',
          skills: ['Java', 'Spring', 'React', 'TypeScript', 'JSF', 'PrimeFaces', 'PostgreSQL', 'AWS'],
        },
        {
          company: 'GAMELAB · IMD / UFRN',
          role: 'Undergraduate Research Fellow',
          period: 'Jan 2019 — Dec 2019',
          summary:
            'Researched gamification in learning and developed educational games. Participated in game jams and presented talks at schools and events about games as educational tools.',
          skills: ['Unity 3D', 'C#', 'Blender', 'Game Design', 'Public Speaking'],
        },
      ],
    },
    expertise: {
      label: '03 / Expertise',
      title: 'A practical, full-stack toolkit',
      groups: [
        {
          number: '01',
          title: 'Backend & architecture',
          description:
            'Robust services and maintainable architectures designed around business rules, integration and long-term evolution.',
          skills: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'REST APIs', 'Microservices', 'Design Patterns'],
        },
        {
          number: '02',
          title: 'Frontend',
          description:
            'Responsive, accessible interfaces that turn complex workflows into clear and effective user experiences.',
          skills: ['TypeScript', 'React', 'Angular', 'HTML', 'CSS', 'Tailwind CSS'],
        },
        {
          number: '03',
          title: 'Cloud & data',
          description:
            'Production-ready environments, asynchronous integrations and relational or vector data infrastructure.',
          skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Kafka', 'PostgreSQL', 'SQL Server', 'Qdrant'],
        },
        {
          number: '04',
          title: 'Engineering practices',
          description:
            'Collaborative delivery grounded in clear requirements, clean code and dependable engineering practices.',
          skills: ['Scrum', 'Kanban', 'Clean Code', 'SOLID', 'TDD', 'Git', 'GitLab', 'GitHub'],
        },
      ],
    },
    education: {
      label: '04 / Education',
      title: 'Academic background',
      items: [
        {
          institution: 'Federal University of Rio Grande do Norte · UFRN',
          course: "Bachelor's degree in Information Technology",
          period: '2022 — 2025',
        },
        {
          institution: 'Federal Institute of Rio Grande do Norte · IFRN',
          course: 'Technical degree in Information Technology',
          period: '2018 — 2021',
        },
      ],
      languagesTitle: 'Languages',
      languages: 'Portuguese · Native  /  English · Advanced',
    },
    footer: {
      eyebrow: 'Have a project or opportunity in mind?',
      title: "Let's build something meaningful.",
      text: 'I am always open to thoughtful conversations about software engineering, products and challenging domains.',
      email: 'Send me an email',
      linkedin: 'LinkedIn',
      rights: 'All rights reserved.',
    },
  },
  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', expertise: 'Competências', education: 'Formação' },
    controls: { language: 'Idioma', theme: 'Tema', light: 'Usar tema claro', dark: 'Usar tema escuro' },
    hero: {
      eyebrow: 'Engenheiro de software fullstack · Brasil',
      title: 'Construo software confiável para desafios complexos do mundo real.',
      intro:
        'Engenheiro fullstack focado na modernização de sistemas críticos e na criação de produtos digitais para os setores financeiro, jurídico e público.',
      contact: 'Entre em contato',
      imageAlt: 'Retrato de Jefferson Thiago',
      availability: 'Java · TypeScript · Cloud',
    },
    about: {
      label: '01 / Sobre',
      title: 'Engenharia com contexto, clareza e propósito.',
      paragraphs: [
        'Meu trabalho combina engenharia de backend sólida, interfaces bem pensadas e domínios de negócio complexos. Tenho experiência na evolução de plataformas legadas, no desenho de soluções distribuídas e na entrega de produtos em que confiabilidade é essencial.',
        'Transito entre arquitetura e implementação, colaboro com equipes multidisciplinares e transformo necessidades de domínio em software sustentável.',
      ],
      stats: [
        { value: '4+', label: 'anos construindo software' },
        { value: '06', label: 'experiências profissionais' },
        { value: '02', label: 'idiomas' },
      ],
    },
    experience: {
      label: '02 / Experiência',
      title: 'Experiências selecionadas',
      intro: 'Uma trajetória marcada por modernização, serviços públicos de impacto e sistemas financeiros críticos.',
      items: [
        {
          company: 'CI&T',
          role: 'Analista de Sistemas Fullstack',
          period: 'ago. 2024 — presente',
          summary:
            'Desenvolvimento e evolução de sistemas para uma instituição financeira de grande porte, no domínio de ações e custódia de fundos. Atuo em aplicações distribuídas e altamente críticas, que exigem precisão, confiabilidade e rastreabilidade.',
          skills: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Kafka', 'Azure', 'SQL Server'],
        },
        {
          company: 'FUNPEC / UFRN · MPT-SEAP',
          role: 'Desenvolvedor Fullstack',
          period: 'abr. 2025 — abr. 2026',
          summary:
            'Construção de uma plataforma para apoiar a inserção de pessoas privadas de liberdade no mercado de trabalho, com funcionalidades para divulgação de oportunidades e seleção de perfis utilizando IA generativa e busca vetorial.',
          skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'LLMs', 'Qdrant'],
        },
        {
          company: 'FUNPEC / UFRN · Smart Prison',
          role: 'Desenvolvedor Fullstack',
          period: 'jun. 2024 — jan. 2025',
          summary:
            'Desenvolvimento de ponta a ponta de um sistema de administração das unidades penitenciárias do Rio Grande do Norte, apoiando processos operacionais com dados consistentes e regras de negócio orientadas ao domínio.',
          skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
        },
        {
          company: 'FUNPEC / UFRN · Fomento Rural',
          role: 'Desenvolvedor Fullstack',
          period: 'mar. 2024 — jun. 2024',
          summary:
            'Modernização de uma plataforma do Governo do Estado, migrando gradualmente um monólito em PHP para uma arquitetura orientada a serviços e uma nova interface em React.',
          skills: ['PHP', 'Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
        },
        {
          company: 'Lampp-IT Solutions',
          role: 'Analista de Sistemas Fullstack',
          period: 'jan. 2022 — jul. 2024',
          summary:
            'Sustentação e evolução de sistemas do Tribunal de Justiça do Rio Grande do Norte, garantindo a continuidade de aplicações legadas críticas e migrando módulos gradualmente para arquiteturas e tecnologias modernas.',
          skills: ['Java', 'Spring', 'React', 'TypeScript', 'JSF', 'PrimeFaces', 'PostgreSQL', 'AWS'],
        },
        {
          company: 'GAMELAB · IMD / UFRN',
          role: 'Bolsista de Iniciação Científica',
          period: 'jan. 2019 — dez. 2019',
          summary:
            'Pesquisa sobre gamificação da aprendizagem e desenvolvimento de jogos educacionais. Participação em game jams e realização de palestras em escolas e eventos sobre jogos como ferramentas educacionais.',
          skills: ['Unity 3D', 'C#', 'Blender', 'Game Design', 'Palestras'],
        },
      ],
    },
    expertise: {
      label: '03 / Competências',
      title: 'Uma base fullstack aplicada',
      groups: [
        {
          number: '01',
          title: 'Backend e arquitetura',
          description:
            'Serviços robustos e arquiteturas sustentáveis, orientados às regras de negócio, à integração e à evolução de longo prazo.',
          skills: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'APIs REST', 'Microsserviços', 'Design Patterns'],
        },
        {
          number: '02',
          title: 'Frontend',
          description:
            'Interfaces responsivas e acessíveis que transformam fluxos complexos em experiências claras e eficientes.',
          skills: ['TypeScript', 'React', 'Angular', 'HTML', 'CSS', 'Tailwind CSS'],
        },
        {
          number: '03',
          title: 'Cloud e dados',
          description:
            'Ambientes prontos para produção, integrações assíncronas e infraestrutura de dados relacional ou vetorial.',
          skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Kafka', 'PostgreSQL', 'SQL Server', 'Qdrant'],
        },
        {
          number: '04',
          title: 'Práticas de engenharia',
          description:
            'Entrega colaborativa apoiada por requisitos claros, código limpo e práticas de engenharia confiáveis.',
          skills: ['Scrum', 'Kanban', 'Clean Code', 'SOLID', 'TDD', 'Git', 'GitLab', 'GitHub'],
        },
      ],
    },
    education: {
      label: '04 / Formação',
      title: 'Formação acadêmica',
      items: [
        {
          institution: 'Universidade Federal do Rio Grande do Norte · UFRN',
          course: 'Bacharelado em Tecnologia da Informação',
          period: '2022 — 2025',
        },
        {
          institution: 'Instituto Federal do Rio Grande do Norte · IFRN',
          course: 'Técnico de Nível Médio em Informática',
          period: '2018 — 2021',
        },
      ],
      languagesTitle: 'Idiomas',
      languages: 'Português · Nativo  /  Inglês · Avançado',
    },
    footer: {
      eyebrow: 'Tem um projeto ou oportunidade em mente?',
      title: 'Vamos construir algo relevante.',
      text: 'Estou sempre aberto a boas conversas sobre engenharia de software, produtos e domínios desafiadores.',
      email: 'Envie um e-mail',
      linkedin: 'LinkedIn',
      rights: 'Todos os direitos reservados.',
    },
  },
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', expertise: 'Competencias', education: 'Formación' },
    controls: { language: 'Idioma', theme: 'Tema', light: 'Usar tema claro', dark: 'Usar tema oscuro' },
    hero: {
      eyebrow: 'Ingeniero de software full-stack · Brasil',
      title: 'Construyo software confiable para desafíos complejos del mundo real.',
      intro:
        'Ingeniero full-stack enfocado en modernizar sistemas críticos y crear productos digitales para los sectores financiero, judicial y público.',
      contact: 'Hablemos',
      imageAlt: 'Retrato de Jefferson Thiago',
      availability: 'Java · TypeScript · Cloud',
    },
    about: {
      label: '01 / Sobre mí',
      title: 'Ingeniería con contexto, claridad y propósito.',
      paragraphs: [
        'Mi trabajo combina ingeniería backend sólida, interfaces cuidadas y dominios de negocio complejos. Tengo experiencia evolucionando plataformas heredadas, diseñando soluciones distribuidas y entregando productos donde la confiabilidad es esencial.',
        'Me desenvuelvo entre la arquitectura y la implementación, colaboro con equipos multidisciplinarios y traduzco necesidades del dominio en software mantenible.',
      ],
      stats: [
        { value: '4+', label: 'años creando software' },
        { value: '06', label: 'experiencias profesionales' },
        { value: '02', label: 'idiomas' },
      ],
    },
    experience: {
      label: '02 / Experiencia',
      title: 'Experiencia seleccionada',
      intro: 'Una trayectoria marcada por modernización, servicios públicos de impacto y sistemas financieros críticos.',
      items: [
        {
          company: 'CI&T',
          role: 'Analista de Sistemas Full-stack',
          period: 'ago. 2024 — actualidad',
          summary:
            'Desarrollo y evolución de sistemas para una gran institución financiera en el dominio de acciones y custodia de fondos. Trabajo en aplicaciones distribuidas y altamente críticas que exigen precisión, confiabilidad y trazabilidad.',
          skills: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Kafka', 'Azure', 'SQL Server'],
        },
        {
          company: 'FUNPEC / UFRN · MPT-SEAP',
          role: 'Desarrollador Full-stack',
          period: 'abr. 2025 — abr. 2026',
          summary:
            'Construcción de una plataforma para apoyar la inserción laboral de personas privadas de libertad, con publicación de oportunidades y selección de perfiles mediante IA generativa y búsqueda vectorial.',
          skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'LLMs', 'Qdrant'],
        },
        {
          company: 'FUNPEC / UFRN · Smart Prison',
          role: 'Desarrollador Full-stack',
          period: 'jun. 2024 — ene. 2025',
          summary:
            'Desarrollo integral de un sistema de administración para unidades penitenciarias de Rio Grande do Norte, apoyando procesos operativos con datos consistentes y reglas de negocio orientadas al dominio.',
          skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
        },
        {
          company: 'FUNPEC / UFRN · Fomento Rural',
          role: 'Desarrollador Full-stack',
          period: 'mar. 2024 — jun. 2024',
          summary:
            'Modernización de una plataforma del Gobierno Estatal, migrando gradualmente un monolito PHP hacia una arquitectura orientada a servicios y una nueva interfaz en React.',
          skills: ['PHP', 'Laravel', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
        },
        {
          company: 'Lampp-IT Solutions',
          role: 'Analista de Sistemas Full-stack',
          period: 'ene. 2022 — jul. 2024',
          summary:
            'Mantenimiento y evolución de sistemas del Tribunal de Justicia de Rio Grande do Norte, garantizando la continuidad de aplicaciones heredadas críticas y migrando módulos hacia arquitecturas modernas.',
          skills: ['Java', 'Spring', 'React', 'TypeScript', 'JSF', 'PrimeFaces', 'PostgreSQL', 'AWS'],
        },
        {
          company: 'GAMELAB · IMD / UFRN',
          role: 'Becario de Iniciación Científica',
          period: 'ene. 2019 — dic. 2019',
          summary:
            'Investigación sobre gamificación del aprendizaje y desarrollo de juegos educativos. Participación en game jams y charlas en escuelas y eventos sobre los juegos como herramientas educativas.',
          skills: ['Unity 3D', 'C#', 'Blender', 'Game Design', 'Charlas'],
        },
      ],
    },
    expertise: {
      label: '03 / Competencias',
      title: 'Una base full-stack práctica',
      groups: [
        {
          number: '01',
          title: 'Backend y arquitectura',
          description:
            'Servicios robustos y arquitecturas mantenibles, orientados a reglas de negocio, integración y evolución a largo plazo.',
          skills: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'APIs REST', 'Microservicios', 'Design Patterns'],
        },
        {
          number: '02',
          title: 'Frontend',
          description:
            'Interfaces responsivas y accesibles que convierten flujos complejos en experiencias claras y eficientes.',
          skills: ['TypeScript', 'React', 'Angular', 'HTML', 'CSS', 'Tailwind CSS'],
        },
        {
          number: '03',
          title: 'Cloud y datos',
          description:
            'Entornos listos para producción, integraciones asíncronas e infraestructura de datos relacional o vectorial.',
          skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Kafka', 'PostgreSQL', 'SQL Server', 'Qdrant'],
        },
        {
          number: '04',
          title: 'Prácticas de ingeniería',
          description:
            'Entrega colaborativa basada en requisitos claros, código limpio y prácticas de ingeniería confiables.',
          skills: ['Scrum', 'Kanban', 'Clean Code', 'SOLID', 'TDD', 'Git', 'GitLab', 'GitHub'],
        },
      ],
    },
    education: {
      label: '04 / Formación',
      title: 'Formación académica',
      items: [
        {
          institution: 'Universidad Federal de Rio Grande do Norte · UFRN',
          course: 'Licenciatura en Tecnología de la Información',
          period: '2022 — 2025',
        },
        {
          institution: 'Instituto Federal de Rio Grande do Norte · IFRN',
          course: 'Técnico en Tecnología de la Información',
          period: '2018 — 2021',
        },
      ],
      languagesTitle: 'Idiomas',
      languages: 'Portugués · Nativo  /  Inglés · Avanzado',
    },
    footer: {
      eyebrow: '¿Tienes un proyecto u oportunidad en mente?',
      title: 'Construyamos algo relevante.',
      text: 'Siempre estoy abierto a buenas conversaciones sobre ingeniería de software, productos y dominios desafiantes.',
      email: 'Envíame un correo',
      linkedin: 'LinkedIn',
      rights: 'Todos los derechos reservados.',
    },
  },
}

const languageLabels: Record<Language, string> = { en: 'EN', pt: 'PT', es: 'ES' }

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === 'light' ? (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
    </svg>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language')
    return saved === 'pt' || saved === 'es' ? saved : 'en'
  })
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const copy = content[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111412' : '#f3f0e8')
    localStorage.setItem('portfolio-language', language)
    localStorage.setItem('portfolio-theme', theme)
  }, [language, theme])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Jefferson Thiago — Home">JT<span>.</span></a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span className="sr-only">Menu</span>
        </button>

        <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>{copy.nav.about}</a>
          <a href="#experience" onClick={closeMenu}>{copy.nav.experience}</a>
          <a href="#expertise" onClick={closeMenu}>{copy.nav.expertise}</a>
          <a href="#education" onClick={closeMenu}>{copy.nav.education}</a>
        </nav>

        <div className="header-controls">
          <div className="language-switcher" aria-label={copy.controls.language}>
            {(Object.keys(languageLabels) as Language[]).map((item) => (
              <button
                key={item}
                className={language === item ? 'is-active' : ''}
                type="button"
                aria-pressed={language === item}
                onClick={() => setLanguage(item)}
              >
                {languageLabels[item]}
              </button>
            ))}
          </div>
          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === 'dark' ? copy.controls.light : copy.controls.dark}
            onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1>{copy.hero.title}</h1>
            <p className="hero-intro">{copy.hero.intro}</p>
            <a className="text-link" href="mailto:jeffersonthiago.ga@gmail.com">
              {copy.hero.contact}
              <ArrowIcon />
            </a>
          </div>

          <figure className="portrait-wrap">
            <span className="portrait-index">01</span>
            <img
              src="/jefferson-thiago.webp"
              width="720"
              height="900"
              alt={copy.hero.imageAlt}
              fetchPriority="high"
            />
            <figcaption>{copy.hero.availability}</figcaption>
          </figure>
        </section>

        <section className="section about" id="about">
          <p className="section-label">{copy.about.label}</p>
          <div className="section-body about-body">
            <h2>{copy.about.title}</h2>
            <div className="about-copy">
              {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="stats">
              {copy.about.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <p className="section-label">{copy.experience.label}</p>
          <div className="section-body">
            <div className="section-heading">
              <h2>{copy.experience.title}</h2>
              <p>{copy.experience.intro}</p>
            </div>
            <div className="experience-list">
              {copy.experience.items.map((item, index) => (
                <article className="experience-item" key={`${item.company}-${item.period}`}>
                  <span className="item-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="experience-meta">
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                    <time>{item.period}</time>
                  </div>
                  <div className="experience-detail">
                    <p>{item.summary}</p>
                    <ul className="skill-list" aria-label="Technologies">
                      {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section expertise" id="expertise">
          <p className="section-label">{copy.expertise.label}</p>
          <div className="section-body">
            <h2>{copy.expertise.title}</h2>
            <div className="expertise-grid">
              {copy.expertise.groups.map((group) => (
                <article className="expertise-card" key={group.number}>
                  <span>{group.number}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul className="plain-skill-list">
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education" id="education">
          <p className="section-label">{copy.education.label}</p>
          <div className="section-body">
            <h2>{copy.education.title}</h2>
            <div className="education-list">
              {copy.education.items.map((item) => (
                <article key={item.institution}>
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.course}</h3>
                    <p>{item.institution}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="languages">
              <h3>{copy.education.languagesTitle}</h3>
              <p>{copy.education.languages}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <p className="eyebrow">{copy.footer.eyebrow}</p>
          <h2>{copy.footer.title}</h2>
          <p>{copy.footer.text}</p>
          <a className="email-button" href="mailto:jeffersonthiago.ga@gmail.com">
            {copy.footer.email}
            <ArrowIcon />
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jefferson Thiago. {copy.footer.rights}</p>
          <div>
            <a href="mailto:jeffersonthiago.ga@gmail.com">jeffersonthiago.ga@gmail.com</a>
            <a href="https://www.linkedin.com/in/dev-jefferson-araujo" target="_blank" rel="noreferrer">
              {copy.footer.linkedin}
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
