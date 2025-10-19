type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  type?: string
  highlights: string[]
}

type Education = {
  school: string
  degree: string
  field: string
  start: string
  end: string
  link: string
  id: string
  location?: string
  gpa?: string
  highlights?: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Hackathon = {
  name: string
  description: string
  prize: string
  link: string
  vimeoId?: string
  videoUrl?: string
  tags: string[]
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Vidova AI - Your Personal Filmmaker',
    description:
      'Built a full-stack desktop application for video editing and AI-powered screen recording. Engineered GPU-accelerated rendering pipelines, implemented real-time AI processing for video enhancement, and designed an intuitive interface handling complex editing workflows. Developed cross-platform architecture supporting high-performance video processing while maintaining responsive UI/UX.',
    link: 'https://vidova.ai/',
    video:
      'https://res.cloudinary.com/vidovaai/video/upload/v1717643404/Sheets_Demo_eihanr.mp4',
    id: 'vidova',
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'University of New Brunswick',
    degree: 'Bachelor of Computer Science',
    field: 'Computer Science',
    start: '2024',
    end: '2028 (Expected)',
    location: 'Fredericton, NB, Canada',
    gpa: '4.1 / 4.3',
    link: 'https://www.unb.ca',
    id: 'unb',
    highlights: [
      'Focus on Computer Science fundamentals, mathematics, and applied computing',
      'Coursework includes data structures, algorithms, software engineering, and machine learning',
      'Active in research initiatives at the Canadian Institute for Cybersecurity',
    ],
  },
  {
    school: 'CPGE Moulay Youssef',
    degree: 'Classes Préparatoires aux Grandes Écoles',
    field: 'MPSI (Mathematics, Physics, and Engineering Science)',
    start: '2023',
    end: '2024',
    location: 'Rabat, Morocco',
    link: 'https://www.cpge.ma/liste-des-cpge-publiques-au-maroc/lycee-moulay-youssef-cpge/',
    id: 'cpge',
    highlights: [
      'Graduated Top of Class in rigorous French preparatory program',
      'Intensive curriculum in advanced mathematics, physics, and computer science',
      'Prepared for competitive entrance exams to top engineering schools',
    ],
  },
  {
    school: 'Lycée Elbilia Skolar',
    degree: 'Baccalauréat en Sciences Mathématiques',
    field: 'Mathematical Sciences (French Curriculum)',
    start: '2021',
    end: '2023',
    location: 'Rabat, Morocco',
    link: 'https://www.elbilia-skolar.ma/',
    id: 'lycee',
    highlights: [
      'Graduated Top of Class with honors',
      'Specialized in advanced mathematics and sciences',
      'Strong foundation in analytical and problem-solving skills',
    ],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Canadian Institute for Cybersecurity',
    title: 'Software Developer',
    start: 'September 2025',
    end: 'Present',
    type: 'Part-Time',
    link: 'https://www.unb.ca/cic/',
    id: 'cic-pt',
    highlights: [
      'Reduced model inference latency by 65% (230ms → 80ms) by migrating threat classifiers from BERT to LLM-based embeddings on FastAPI',
      'Reduced CI/CD pipeline runtime by 67% (from 67 minutes to 22 minutes) through workflow isolation, build caching, and parallel testing.',
      'Improved frontend performance by cutting reload time from 30s to <1s using Vite HMR and shrinking JS bundles by 25%',
      'Increased test coverage to 85% across new modules (frontend, backend, APIs), exceeding CI/CD quality targets',
    ],
  },
  {
    company: 'Canadian Institute for Cybersecurity',
    title: 'Software Developer Intern',
    start: 'January 2025',
    end: 'August 2025',
    type: 'Full-Time',
    link: 'https://www.unb.ca/cic/',
    id: 'cic-intern',
    highlights: [
      'Boosted automated test coverage to 83% using PHPUnit and Cypress across backend and frontend',
      'Cut CI runtime by 75% (40min → 10min) through caching, parallelism, and Docker optimizations',
      'Achieved 95%+ accuracy in 5 languages by building a FastText-based language detection API integrated into ETL pipelines',
      'Automated PDF reporting with Puppeteer, generating custom fonts, charts, and templates for intelligence reports',
      'Strengthened API reliability by applying OWASP guidelines and remediating vulnerabilities',
    ],
  },
  {
    company: 'Twilio',
    title: 'Contributor',
    start: '2022',
    end: '2024',
    type: 'Contract (Voices Program)',
    link: 'https://www.twilio.com/docs',
    id: 'twilio',
    highlights: [
      'Improved video engagement by developing React + TensorFlow/WebGL 3D effects for Twilio Video demo apps',
      'Expanded developer adoption by authoring sample apps and blogs showcasing Twilio Video API integrations',
      'Increased delivery speed by collaborating in Agile sprints with GitHub-based CI/CD pipelines and peer code reviews',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Winning First Place at the 2023 Google and Square AI Hackathon',
    description: 'Sharing my experience and learnings from the hackathon, and the project I built.',
    link: '/blog/winning-first-place-at-the-2023-google-and-square-ai-hackathon',
    uid: 'google-square-hackathon',
  },
  {
    title: 'Winning multiple hackathons in one year: 1Password, Outerbase (Cloudflare), and Google and Square',
    description:
      'How I won multiple hackathons in one year, and what I learned from each of them.',
    link: '/blog/winning-multiple-hackathons-in-one-year',
    uid: 'multiple-hackathons',
  },
  {
    title: 'Freelancing at Cyclic, Twilio, and DigitalOcean',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/freelancing-at-cyclic-twilio-and-digitalocean',
    uid: 'freelancing',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/youneslaaroussi',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/younes-laaroussi',
  },
]

export const EMAIL = 'hello@youneslaaroussi.ca'

export const HACKATHONS: Hackathon[] = [
  {
    name: 'SquareSense AI - Personalized Ecommerce Intelligence',
    description:
      'AI-powered ecommerce platform augmenting Square databases with chat, interactive charts, data insights, psychographic analysis, and voice-enabled chart explanations.',
    prize: '🥇 1st Place Overall',
    link: 'https://devpost.com/software/squaresense-ai-personalized-ecommerce-intelligence',
    vimeoId: '875411941',
    tags: ['Google Vertex AI', 'Square API', 'Next.js', 'AI', 'ML'],
    id: 'squaresense',
  },
  {
    name: 'ForestShield: AWS Deforestation Detection',
    description:
      'Serverless forest monitoring system using AWS Lambda, Sentinel-2, and SageMaker — tracks deforestation in real-time with NDVI indices and K-means clustering.',
    prize: '🥇 1st Prize',
    link: 'https://devpost.com/software/forestshield-aws-deforestation-detection',
    vimeoId: '1097668126', 
    tags: ['AWS Lambda', 'SageMaker', 'Python', 'Geospatial ML'],
    id: 'forestshield',
  },
  {
    name: 'AutoIR: Agentic Incident Response on TiDB + AWS',
    description:
      'Turns noisy AWS logs into actionable incidents using TiDB vector search and agentic LLM. Ingest, embed, detect spikes, and route alerts—serverless, fast, safe.',
    prize: '🥉 3rd Place',
    link: 'https://devpost.com/software/autoir-agentic-incident-response-on-tidb-aws',
    vimeoId: '1118404781', 
    tags: ['TiDB', 'AWS', 'Node.js', 'LLM', 'Vector Search'],
    id: 'autoir',
  },
  {
    name: 'Project Nexus: AI Supply Chain Intelligence & Forecasting',
    description:
      'AI-powered supply chain forecasting platform using LLaMA 3 models to turn raw ERP data into actionable, real-time business insights—cloud-native and production-ready.',
    prize: '🥉 3rd Prize',
    link: 'https://devpost.com/software/project-nexus-ai-supply-chain-intelligence-forecasting',
    vimeoId: '1100472874',
    tags: ['LLaMA 3', 'SageMaker', 'TimeLLM', 'Python', 'AWS'],
    id: 'nexus',
  },
]
