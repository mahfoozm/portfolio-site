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
  // AiFillHtml5,
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
// import { IoLogoSass, IoLogoLinkedin } from 'react-icons/io';
import { IoLogoLinkedin } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  // SiJavascript,
  SiMongodb,
  SiStyledcomponents,
  SiRedux,
  SiPostgresql,
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
  // {
  //   id: 'html',
  //   name: 'HTML5',
  //   Icon: AiFillHtml5,
  // },
  // {
  //   id: 'sass',
  //   name: 'Sass',
  //   Icon: IoLogoSass,
  // },
  // {
  //   id: 'javascript',
  //   name: 'Javascript',
  //   Icon: SiJavascript,
  // },
  {
    id: "typescript",
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    id: "react",
    name: "React.js",
    Icon: FaReact,
  },
  {
    id: "react-native",
    name: "React Native",
    Icon: FaReact,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    id: "node",
    name: "Node.js",
    Icon: FaNodeJs,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    Icon: SiMongodb,
  },
  {
    id: "postgre",
    name: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    id: "graphql",
    name: "GraphQL",
    Icon: GrGraphQl,
  },
  {
    id: "restapi",
    name: "REST API",
    Icon: AiFillApi,
  },
  {
    id: "firebase",
    name: "Firebase",
    Icon: SiFirebase,
  },
  {
    id: "docker",
    name: "Docker",
    Icon: FaDocker,
  },
  {
    id: "github",
    name: "Github",
    Icon: AiFillGithub,
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
  description: "Hi! I'm Mohammad Mahfooz..",
  title: "mohammad mahfooz",
  image: "/assets/projects/project1.png",
  url: "https://mohammadmahfooz.engineer/",
  twitterUsername: "@mxhammadm",
};

export const nextSeo = {
  title: "mohammad mahfooz",
  description: "Hi! I am Mohammad Mahfooz.",
  canonical: "https://mohammadmahfooz.engineer/",
  openGraph: {
    url: "https://mohammadmahfooz.engineer/",
    title: "Mohammad Mahfooz",
    description: "Hi! I'm Mohammad Mahfooz.",
    images: [
      {
        url: "/assets/projects/project1.png",
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
    name: "Project 1",
    image: "/assets/projects/project1.png",
    alt: "Project 1",
    info: "Project 1",
    techs: ["Typescript", "React.js", "Next.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/mahfoozm",
    },
  },
  {
    name: "Project 2",
    image: "/assets/projects/project2.png",
    alt: "Project 2",
    info: "Project 2",
    techs: ["Typescript", "React.js", "Next.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/mahfoozm",
    },
  },
  {
    name: "Project 3",
    image: "/assets/projects/project3.png",
    alt: "Project 3",
    info: "Project 3",
    techs: ["Typescript", "React.js", "Next.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/mahfoozm",
    },
  },
  {
    name: "Project 4",
    image: "/assets/projects/project4.png",
    alt: "Project 4",
    info: "Project 4",
    techs: ["Typescript", "React.js", "Next.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/mahfoozm",
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
