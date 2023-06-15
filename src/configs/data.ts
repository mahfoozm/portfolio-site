// @ts-nocheck

import {
  INavLinks,
  IProjects,
  ISocialLinks,
  ISkills,
  CustomSeoProps
} from './types';
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillApi,
  AiOutlineTeam,
  AiFillMessage
} from 'react-icons/ai';
import { FiTwitter, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { GiPlayerTime, GiThink } from 'react-icons/gi';
import { BsArrowRepeat } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import { GrGolang, GrGraphQl, GrMysql } from 'react-icons/gr';
import {
  SiJava,
  SiSwift,
  SiPython,
  SiRust,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiFlask,
  SiSelenium,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiGoland,
  SiKubernetes,
  SiFastapi,
  SiLinux,
  SiPytorch,
  SiGnubash
} from 'react-icons/si';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAssistiveListeningSystems,
  FaFistRaised,
  FaHandHoldingHeart,
  FaPuzzlePiece,
  FaDocker
} from 'react-icons/fa';

export const navLinks: INavLinks = {
  home: [
    {
      name: 'About',
      url: '/#about'
    },
    {
      name: 'Projects',
      url: '/#projects'
    },
    {
      name: 'Contact',
      url: '/#contact'
    }
  ]
};

export const skills: ISkills[] = [
  {
    id: 'c',
    name: 'C',
    Icon: SiC
  },
  {
    id: 'cpp',
    name: 'C++',
    Icon: SiCplusplus
  },
  {
    id: 'python',
    name: 'Python',
    Icon: SiPython
  },
  {
    id: 'java',
    name: 'Java',
    Icon: SiJava
  },
  {
    id: 'rust',
    name: 'Rust',
    Icon: SiRust
  },
  {
    id: 'go',
    name: 'Go',
    Icon: SiGoland
  },
  {
    id: 'swift',
    name: 'Swift',
    Icon: SiSwift
  },
  {
    id: 'bash',
    name: 'Bash',
    Icon: SiGnubash
  },
  {
    id: 'linux',
    name: 'Linux',
    Icon: SiLinux
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    Icon: SiPytorch
  },
  {
    id: 'javascript',
    name: 'Javascript',
    Icon: SiJavascript
  },
  {
    id: 'typescript',
    name: 'Typescript',
    Icon: SiTypescript
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    Icon: FaNodeJs
  },
  {
    id: 'reactjs',
    name: 'React',
    Icon: FaReact
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    Icon: SiNextdotjs
  },
  {
    id: 'selenium',
    name: 'Selenium',
    Icon: SiSelenium
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    Icon: SiMongodb
  },
  {
    id: 'mysql',
    name: 'MySQL',
    Icon: GrMysql
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    Icon: GrGraphQl
  },
  {
    id: 'git',
    name: 'Git',
    Icon: FaGitAlt
  },
  {
    id: 'docker',
    name: 'Docker',
    Icon: FaDocker
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    Icon: SiKubernetes
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    Icon: SiFastapi
  },
  {
    id: 'flask',
    name: 'Flask',
    Icon: SiFlask
  }
];

export const customSeo: CustomSeoProps = {
  description:
    "hi! my name is mohammad mahfooz. i'm a third year Software Engineering student studying at York University. this is my portfolio, which showcases some of my skills and projects.",
  title: 'mohammad mahfooz',
  image: '/assets/projects/aboutphoto.png',
  url: 'https://mohammadmahfooz.engineer/',
  twitterUsername: '@mxhammadm'
};

export const nextSeo = {
  title: 'mohammad mahfooz',
  description:
    "hi! my name is mohammad mahfooz. i'm a third year Software Engineering student studying at York University. this is my portfolio, which showcases some of my skills and projects.",
  canonical: 'https://mohammadmahfooz.engineer/',
  openGraph: {
    url: 'https://mohammadmahfooz.engineer/',
    title: 'Mohammad Mahfooz',
    description:
      "hi! my name is mohammad mahfooz. i'm a third year Software Engineering student studying at York University. this is my portfolio, which showcases some of my skills and projects.",
    images: [
      {
        url: '/assets/projects/aboutphoto.png'
      }
    ],
    site_name: 'mohammad mahfooz'
  },
  twitter: {
    handle: '@mxhammadm',
    site: 'https://mohammadmahfooz.engineer/',
    cardType: 'summary_large_image'
  }
};

export const projects: IProjects[] = [
  {
    name: 'YorkURMP',
    image: '/assets/projects/stanislawgoat.png',
    alt: 'YorkU RMP',
    info: 'a browser extension that displays professors from RateMyProfessors.com on the YorkU course search portal.',
    techs: ['JavaScript', 'HTML', 'GraphQL', 'Node.js'],
    links: {
      github: 'https://github.com/mahfoozm/YorkURMP'
    }
  },
  {
    name: 'CoverGPT',
    image: '/assets/projects/covergpt.png',
    alt: 'CoverGPT',
    info: 'a program that uses AI to generate a personalized and formatted cover letter given a job posting and a resume.',
    techs: ['Python', 'TKinter', 'LaTeX', 'ChatGPT'],
    links: {
      github: 'https://github.com/mahfoozm/CoverGPT'
    }
  },
  {
    name: 'Portfolio Site',
    image: '/assets/projects/sitewelcome.png',
    alt: 'Portfolio Site',
    info: "my portfolio site (which you're currently on!). designed to showcase my skills and projects.",
    techs: ['TypeScript', 'React', 'Next.js', 'Styled Components', 'Node.js'],
    links: {
      github: 'https://github.com/mahfoozm/portfolio-site'
    }
  },
  {
    name: 'CUPEBot',
    image: '/assets/projects/cupebot.png',
    alt: 'CUPEBot',
    info: 'a discord bot that monitors EECS CUPE TA postings, and sends a discord message when a specified posting is added.',
    techs: ['Python', 'Beautiful Soup', 'discord.py'],
    links: {
      github: 'https://github.com/mahfoozm/cupe-jobs-monitor'
    }
  },
  {
    name: 'Air Quality Monitor',
    image: '/assets/projects/airqualitymonitor.png',
    alt: 'Air Quality Monitor',
    info: 'a CO2 monitor/weather station using Java and an Arduino.',
    techs: ['Java', 'C++', 'Firmata', 'JavaFX', 'jSerialComm'],
    links: {
      github: 'https://github.com/mahfoozm/airqualitymonitor'
    }
  },
  {
    name: 'Plant Watering System',
    image: '/assets/projects/autowater.png',
    alt: 'Plant Watering System',
    info: 'an automated plant watering system using Java and an Arduino.',
    techs: ['Java', 'Firmata', 'JUnit'],
    links: {
      github: 'https://github.com/mahfoozm/plantwateringsystem'
    }
  }
];

export const socialLinks: ISocialLinks[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mxhammadm/',
    Icon: AiOutlineInstagram
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/mohammadmahfooz/',
    Icon: FiLinkedin
  },
  {
    name: 'Github',
    url: 'https://github.com/mahfoozm',
    Icon: FiGithub
  }
];
