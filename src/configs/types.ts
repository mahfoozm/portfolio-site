import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

export type NavLinksProps = { name: string; url: string };

export interface INavLinks {
  home: NavLinksProps[];
}

export interface ISkills {
  id: string;
  name: string;
  Icon: IconType;
}

export interface IProjects {
  name: string;
  image: string | StaticImageData;
  alt: string;
  info: string;
  techs: string[];
  links: {
    github: string;
  };
}

export interface ISocialLinks {
  name: string;
  url: string;
  Icon: IconType;
}

export interface CustomSeoProps {
  description: string;
  image: string;
  title: string;
  url: string;
  twitterUsername: string;
}
