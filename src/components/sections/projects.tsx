// @ts-nocheck
import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { parentVar, fadeUp } from "../../configs/animations";
import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";
import { projects } from "../../configs/data";
import {
  StyledProjects,
  StyledProjectCardContainer,
  StyledProjectCardImage,
} from "../../styles/componentStyles";

const Projects = () => {
  const [ref, controls] = useScrollReveal(-250);

  return (
    <StyledProjects
      id="projects"
      variants={parentVar}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <motion.h2 variants={fadeUp} className="section-heading">
        projects
      </motion.h2>
      <StyledProjectCardContainer>
        {projects.map((project) => {
          const { name, image, info, techs, links, alt } = project;

          return (
            <motion.li variants={fadeUp} key={name} className="project-card">
              <div className="project-details">
                <h3 className="project-title">{name}</h3>
                <p className="project-info">{info}</p>
                <p className="project-techs">
                  {techs.map((tech) => (
                    <span className="tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </p>
                <div className="project-buttons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Github repository of ${name}`}
                    href={links.github}
                  >
                    <FiGithub className="project-button" />
                  </a>
                </div>
              </div>
              <StyledProjectCardImage>
                <Image
                  src={image}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="overlay"></div>
              </StyledProjectCardImage>
            </motion.li>
          );
        })}
      </StyledProjectCardContainer>
    </StyledProjects>
  );
};

export default Projects;
