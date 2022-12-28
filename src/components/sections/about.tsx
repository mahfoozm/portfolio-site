import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";
import { Button } from "../index";
import {
  parentVar,
  fadeUp,
  fadeLeft,
  fadeUpDelay,
} from "../../configs/animations";
import TechStacks from "../TechStacks";
import { StyledAbout, StyledAboutContent } from "../../styles/componentStyles";

const About = () => {
  const [ref, controls] = useScrollReveal(-250);

  return (
    <StyledAbout
      variants={parentVar}
      initial="hidden"
      animate="visible"
      id="about"
    >
      <motion.h2
        ref={ref}
        variants={fadeUp}
        animate={controls}
        className="section-heading"
      >
        about
      </motion.h2>
      <StyledAboutContent
        variants={parentVar}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div className="image-wrapper" variants={fadeUp}>
          <Image
            className="about-image"
            // src={zoms}
            src="/assets/me.jpg"
            alt="Photo of Me"
            width={300}
            height={422}
            placeholder="blur"
            blurDataURL="/assets/me.jpg"
          />
          <div className="grayscale" />
        </motion.div>
        <motion.div variants={fadeLeft} className="about-text">
          <h3>Mohammad Mahfooz</h3>
          <p>
            write a bio or something here idk if im even keeping this <br />
            <br />
            <br />
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="initial"
          variants={fadeUpDelay}
          animate={controls}
          className="image-wrapper-square hidden-image"
        >
          <Image
            className="about-image"
            src="/assets/me-square.jpg"
            width={300}
            height={300}
            alt="Photo of Me"
            placeholder="blur"
            blurDataURL="/assets/me-square.jpg"
          />
          <div className="grayscale" />
        </motion.div>
      </StyledAboutContent>
      <TechStacks />
    </StyledAbout>
  );
};

export default About;
