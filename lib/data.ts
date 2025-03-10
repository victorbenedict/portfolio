import rubeeksImg from '@/public/projects/rubeeks.png';
import xendinImg from '@/public/projects/xendin.png';
import { FaGithub, FaLinkedin, FaGitlab } from 'react-icons/fa';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/victorbenedictb/',
  },
  {
    label: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/victorbenedict',
  },
  {
    label: 'GitLab',
    icon: FaGitlab,
    url: 'https://gitlab.com/victorbenedictbulaong',
  },
];
export const skills: {
  label?: string;
  url?: string;
  icon?: string;
  alt?: string;
}[] = [
  {
    label: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: './logos/javascript.svg',
    alt: 'JavaScript logo',
  },
  {
    label: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: './logos/typescript.svg',
    alt: 'TypeScript logo',
  },
  {
    label: 'Next.js',
    url: 'https://nextjs.org/',
    icon: './logos/nextdotjs.svg',
    alt: 'Next.js logo',
  },
  {
    label: 'React',
    url: 'https://react.dev/',
    icon: './logos/react.svg',
    alt: 'React logo',
  },
  {
    label: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    icon: './logos/tailwindcss.svg',
    alt: 'Tailwind CSS logo',
  },
  {
    label: 'Storybook',
    url: 'https://storybook.js.org/',
    icon: './logos/storybook.svg',
    alt: 'Storybook logo',
  },
  {
    label: 'Nest.js',
    url: 'https://nestjs.com/',
    icon: './logos/nestjs.svg',
    alt: 'Nest.js logo',
  },
  {
    label: 'Node.js',
    url: 'https://nodejs.org/',
    icon: './logos/nodedotjs.svg',
    alt: 'Node.js logo',
  },
  {
    label: 'Express',
    url: 'https://expressjs.com/',
    icon: './logos/express.svg',
    alt: 'Express.js logo',
  },
  {
    label: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    icon: './logos/postgresql.svg',
    alt: 'PostgreSQL logo',
  },
  {
    label: 'Supabase',
    url: 'https://supabase.com/',
    icon: './logos/supabase.svg',
    alt: 'Supabase logo',
  },
  {
    label: 'TypeORM',
    url: 'https://typeorm.io/',
    icon: './logos/typeorm.svg',
    alt: 'TypeORM logo',
  },
  {
    label: 'React Hook Form',
    url: 'https://react-hook-form.com/',
    icon: './logos/reacthookform.svg',
    alt: 'React Hook Form logo',
  },
  {
    label: 'TanStack',
    url: 'https://tanstack.com/',
  },
  {
    label: 'Turborepo',
    url: 'https://turbo.build/repo',
    icon: './logos/turborepo.svg',
    alt: 'Turborepo logo',
  },
  {
    label: 'Shadcn',
    url: 'https://ui.shadcn.com/',
    icon: './logos/shadcnui.svg',
    alt: 'Shadcn UI logo',
  },
  {
    label: 'NextUI',
    url: 'https://nextui.org/',
    icon: './logos/nextui.svg',
    alt: 'NextUI logo',
  },
  {
    label: 'Jest',
    url: 'https://jestjs.io/',
    icon: './logos/jest.svg',
    alt: 'Jest logo',
  },
  {
    label: 'Strapi',
    url: 'https://strapi.io/',
    icon: './logos/strapi.svg',
    alt: 'Strapi logo',
  },
  {
    label: 'Jira',
    url: 'https://www.atlassian.com/software/jira',
    icon: './logos/jira.svg',
    alt: 'Jira logo',
  },
  {
    label: 'Git',
    url: 'https://git-scm.com/',
    icon: './logos/git.svg',
    alt: 'Git logo',
  },
  {
    label: 'GitLab',
    url: 'https://about.gitlab.com/',
    icon: './logos/gitlab.svg',
    alt: 'GitLab logo',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/',
    icon: './logos/github.svg',
    alt: 'GitHub logo',
  },
  {
    label: 'Docker',
    url: 'https://www.docker.com/',
    icon: './logos/docker.svg',
    alt: 'Docker logo',
  },
  {
    label: 'Insomnia',
    url: 'https://insomnia.rest/',
    icon: './logos/insomnia.svg',
    alt: 'Insomnia logo',
  },
  {
    label: 'DBeaver',
    url: 'https://dbeaver.io/',
    icon: './logos/dbeaver.svg',
    alt: 'DBeaver logo',
  },
  {
    label: 'Photopea',
    url: 'https://www.photopea.com/',
    icon: './logos/photopea.svg',
    alt: 'Photopea logo',
  },
  {
    label: 'Figma',
    url: 'https://www.figma.com/',
    icon: './logos/figma.svg',
    alt: 'Figma logo',
  },
  {
    label: 'RestAPI',
    url: 'https://restfulapi.net/',
  },
  {
    label: 'TCP/IP Networking',
    url: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/what-is-networking.html',
  },
  {
    label: 'WAN/LAN',
    url: 'https://www.cisco.com/c/en/us/solutions/enterprise-networks/lan-wan.html',
  },
  {
    label: 'Routing and Switching',
    url: 'https://www.cisco.com/c/en/us/products/ios-nx-os-software/routing-protocols.html',
  },
];

export const experiences = [
  {
    startDate: '2023',
    endDate: 'present',
    location: 'Philippines',
    company: 'Rubeeks Technologies ',
    companyUrl: 'https://rubeeks.com/',
    position: 'Full-stack Developer',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem necessitatibus nisi omnis fuga repudiandae assumenda sit libero sint dolor quos autem, accusamus laudantium maxime ut animi non officiis aperiam sed.`,
  },
  {
    startDate: '2018',
    endDate: '2023',
    location: 'Philippines',
    company: 'Concentrix',
    companyUrl: 'https://www.concentrix.com/',
    position: 'Senior Technical Advisor',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae distinctio quae perspiciatis exercitationem amet consectetur, ipsa vero fugiat dignissimos! Beatae ipsum reiciendis quas odit quam blanditiis quod quisquam consectetur consequatur.`,
  },
  {
    startDate: '2014',
    endDate: '2016',
    location: 'United Arab Emirates',
    company: 'Easy World Technology',
    companyUrl: 'https://eworldme.com/',
    position: 'Network Technical Support',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem hic magni modi autem illo earum inventore eius, vel sunt sit optio a quas, minus, recusandae id aliquid tenetur eos totam. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

export const projects = [
  {
    title: 'Rubeeks Web',
    url: 'https://rubeeks.com/',
    description: `A static single page represents the startup company's services and its founders. It features an email subscription form, a database, and web analytics.`,
    imageSrc: rubeeksImg,
    imageAlt: 'Picture of Rubeeks website',
    techStack: [
      'Next.js',
      'Tailwind CSS',
      'Resend',
      'Supabase',
      'Google Analytics',
      'reCAPTCHA',
      'Kubernetes',
      'DigitalOcean',
    ],
  },
  {
    title: 'Xendin Invoice App',
    url: 'https://dev.xendin.com/',
    description:
      'Invoice software for small businesses that generates digital invoices. It includes the management of customer data, products, and payments.',
    imageSrc: xendinImg,
    imageAlt: 'Picture of Xendin App',
    techStack: [
      'Next.js',
      'Tailwind CSS',
      'Turborepo',
      'Storybook',
      'TanStack',
      'React Hook Form',
      'Nest.js',
      'TypeORM',
      'Supabase',
      'Jest',
      'AuthGuard',
    ],
  },
];
