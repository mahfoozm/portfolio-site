// @ts-nocheck

import {
  INavLinks,
  IProjects,
  ISocialLinks,
  ISkills,
  CustomSeoProps,
} from "./types";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillApi,
  AiOutlineTeam,
  AiFillMessage,
} from "react-icons/ai";
import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiFigma,
} from "react-icons/fi";
import { GiPlayerTime, GiThink } from "react-icons/gi";
import { BsArrowRepeat } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";
import {
  SiJava,
  SiSwift,
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiFlask,
  SiVite,
  SiJest,
  SiSelenium,
  SiMysql,
  SiR,
  SiMongodb,
  SiStyledcomponents,
  SiRedux,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAssistiveListeningSystems,
  FaFistRaised,
  FaHandHoldingHeart,
  FaPuzzlePiece,
  FaDocker,
} from "react-icons/fa";

export const navLinks: INavLinks = {
  home: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],
};

export const skills: ISkills[] = [
  {
    id: "java",
    name: "Java",
    Icon: SiJava,
  },
  {
    id: "swift",
    name: "Swift",
    Icon: SiSwift,
  },
  {
    id: "python",
    name: "Python",
    Icon: SiPython,
  },
  {
    id: "c",
    name: "C",
    Icon: SiC,
  },
  {
    id: "cpp",
    name: "C++",
    Icon: SiCplusplus,
  },
  {
    id: "javascript",
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    id: "typescript",
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    id: "nodejs",
    name: "Node.js",
    Icon: FaNodeJs,
  },
  {
    id: "reactjs",
    name: "React",
    Icon: FaReact,
  },
  {
    id: "nextjs",
    name: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    id: "react-native",
    name: "React Native",
    Icon: FaReact,
  },
  {
    id: "selenium",
    name: "Selenium",
    Icon: SiSelenium,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    Icon: SiMongodb,
  },
  {
    id: "graphql",
    name: "GraphQL",
    Icon: GrGraphQl,
  },
  {
    id: "flask",
    name: "Flask",
    Icon: SiFlask,
  },
  {
    id: "docker",
    name: "Docker",
    Icon: FaDocker,
  },
  {
    id: "R",
    name: "R",
    Icon: SiR,
  },
  {
    id: "firebase",
    name: "Firebase",
    Icon: SiFirebase,
  },
  {
    id: "git",
    name: "Git",
    Icon: FaGitAlt,
  },
  {
    id: "figma",
    name: "Figma",
    Icon: FiFigma,
  },
];

export const customSeo: CustomSeoProps = {
  description:
    "hi! my name is mohammad mahfooz. i'm a second year Software Engineering student studying at York University. this is my portfolio, which showcases some of my skills and projects.",
  title: "mohammad mahfooz",
  image: "/assets/projects/aboutphoto.jpg",
  url: "https://mohammadmahfooz.engineer/",
  twitterUsername: "@mxhammadm",
};

export const nextSeo = {
  title: "mohammad mahfooz",
  description:
    "hi! my name is mohammad mahfooz. i'm a second year Software Engineering student studying at York University. this is my portfolio, which showcases some of my skills and projects.",
  canonical: "https://mohammadmahfooz.engineer/",
  openGraph: {
    url: "https://mohammadmahfooz.engineer/",
    title: "Mohammad Mahfooz",
    description:
      "hi! my name is mohammad mahfooz. i'm a second year Software Engineering student studying at York University. this is my portfolio, which showcases some of my skills and projects.",
    images: [
      {
        url: "/assets/projects/aboutphoto.jpg",
      },
    ],
    site_name: "mohammad mahfooz",
  },
  twitter: {
    handle: "@mxhammadm",
    site: "https://mohammadmahfooz.engineer/",
    cardType: "summary_large_image",
  },
};

export const projects: IProjects[] = [
  {
    name: "Air Quality Monitor",
    image: "/assets/projects/airqualitymonitor.png",
    alt: "Air Quality Monitor",
    info: "a CO2 monitor/weather station utilizing Java and an Arduino.",
    techs: ["Java", "C++", "Firmata", "JavaFX", "jSerialComm"],
    links: {
      github: "https://github.com/mahfoozm/airqualitymonitor",
    },
  },
  {
    name: "Plant Watering System",
    image: "/assets/projects/autowater.png",
    alt: "Plant Watering System",
    info: "an automated plant watering system utilizing Java and an Arduino.",
    techs: ["Java", "Firmata", "JUnit"],
    links: {
      github: "https://github.com/mahfoozm/plantwateringsystem",
    },
  },
  {
    name: "Portfolio Site",
    image: "/assets/projects/sitewelcome.png",
    alt: "Portfolio Site",
    info: "my portfolio site (which you're currently on!). designed to showcase my skills and projects.",
    techs: ["TypeScript", "React", "Next.js", "Styled Components", "Node.js"],
    links: {
      github: "https://github.com/mahfoozm/portfolio-site",
    },
  },
  {
    name: "YorkU RMP",
    image: "/assets/projects/stanislawgoat.png",
    alt: "YorkU RMP",
    info: "a chrome extension that displays professor ratings from RateMyProfessors.com on the YorkU course search page.",
    techs: ["JavaScript", "GraphQL", "Node.js"],
    links: {
      github: "https://github.com/mahfoozm/YorkURMP",
    },
  },
];

export const socialLinks: ISocialLinks[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/mxhammadm/",
    Icon: AiOutlineInstagram,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/mohammadmahfooz/",
    Icon: FiLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/mahfoozm",
    Icon: FiGithub,
  },
];
