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
}

type Education = {
  school: string
  degree: string
  field: string
  start: string
  end: string
  link: string
  id: string
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

export const PROJECTS: Project[] = [
  {
    name: 'Vidova AI - Your Personal Filmmaker',
    description:
      'Desktop software application for video editing and AI-powered screen video recording.',
    link: 'https://vidova.ai/',
    video:
      'https://res.cloudinary.com/vidovaai/video/upload/v1717643404/GPURender_jhqyvw.mp4',
    id: 'vidova',
  },
  {
    name: 'LetsToon - AI Avatar Creator',
    description: 'Native mobile app for creating and sharing AI avatars. Available on iOS and Android.',
    link: 'https://imagen.site.vidova.ai/',
    video:
      'https://res.cloudinary.com/vidovaai/video/upload/v1744209724/letstoon-1_dyldnd.mp4',
    id: 'letsToon',
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'University of New Brunswick',
    degree: 'Bachelor of Computer Science',
    field: 'Computer Science',
    start: '2024',
    end: 'Present',
    link: 'https://www.unb.ca',
    id: 'unb',
  },
  {
    school: 'CPGE Moulay Youssef',
    degree: 'Preparatory Classes (Top of Class)',
    field: 'MPSI',
    start: '2023',
    end: '2024',
    link: 'https://www.cpge.ma/liste-des-cpge-publiques-au-maroc/lycee-moulay-youssef-cpge/',
    id: 'cpge',
  },
  {
    school: 'Lycée Elbilia Skolar',
    degree: 'Baccalauréat',
    field: 'Les sciences mathématiques',
    start: '2021',
    end: '2023',
    link: 'https://www.elbilia-skolar.ma/',
    id: 'lycee',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Canadian Institute for Cybersecurity',
    title: 'Co-op Software Engineer',
    start: 'January 2025',
    end: 'Present',
    link: 'https://www.unb.ca/cic/',
    id: 'cic',
  },
  {
    company: 'Twilio Documentation - Contributor',
    title: 'Freelance',
    start: '2022',
    end: '2024',
    link: 'https://www.twilio.com/docs',
    id: 'twilio',
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
