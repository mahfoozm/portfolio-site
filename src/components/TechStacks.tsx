import React from "react";
import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";
import { parentVar, fadeUp, fadeUpQuick } from "../configs/animations";
import { skills } from "../configs/data";
import { StyledTechStacks, StyledTech } from "../styles/componentStyles";

const TechStacks = () => {
  const [ref, controls] = useScrollReveal(-100);

  return (
    <StyledTechStacks
      ref={ref}
      variants={parentVar}
      initial="initial"
      animate={controls}
    >
      <motion.h1 variants={fadeUp}>languages, tools, and frameworks</motion.h1>
      <motion.p variants={fadeUp}>
        programming languages, tools and frameworks that I&apos;m familiar with
      </motion.p>
      <StyledTech>
        <motion.ul>
          {skills.map((skill) => {
            const { name, Icon, id } = skill;

            return (
              <motion.li key={id} variants={fadeUpQuick}>
                <div className="tech-content">
                  <Icon className="logo" />
                  <p>{name}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </StyledTech>
    </StyledTechStacks>
  );
};

export default TechStacks;
