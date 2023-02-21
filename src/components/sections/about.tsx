import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useScrollReveal from '../../hooks/useScrollReveal';

import {
  parentVar,
  fadeUp,
  fadeLeft,
  fadeUpDelay
} from '../../configs/animations';
import TechStacks from '../TechStacks';
import { StyledAbout, StyledAboutContent } from '../../styles/componentStyles';

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
            src="/assets/aboutphoto.jpg"
            alt="Photo of Me"
            width={300}
            height={422}
            placeholder="blur"
            blurDataURL="/assets/aboutphoto.jpg"
          />
          <div className="grayscale" />
        </motion.div>
        <motion.div variants={fadeLeft} className="about-text">
          <h3>Mohammad Mahfooz</h3>
          <p>
            <br />i recently wrapped up my first internship as a Software
            Engineer at YURide (a transportation startup at York University).
            the most valuable skill I gained from this internship was (easily)
            the ability to work on a project as a team, something I wasn&apos;t
            accustomed to before. <br /> <br /> to continue expanding my
            skillset, I am currently learning more about systems programming and
            the linux kernel. i am also working on improving my existing skills
            by completing personal projects. i&apos;m actively seeking
            internships for summer 2023.
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
            src="/assets/aboutphoto-square.jpg"
            width={300}
            height={300}
            alt="Photo of Me"
            placeholder="blur"
            blurDataURL="/assets/aboutphoto-square.jpg"
          />
          <div className="grayscale" />
        </motion.div>
      </StyledAboutContent>
      <TechStacks />
    </StyledAbout>
  );
};

export default About;
