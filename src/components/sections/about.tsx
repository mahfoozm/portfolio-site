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
            src="/assets/aboutphoto.png"
            alt="Photo of Me"
            width={300}
            height={422}
            placeholder="blur"
            blurDataURL="/assets/aboutphoto.png"
          />
          <div />
        </motion.div>
        <motion.div variants={fadeLeft} className="about-text">
          <h3>Mohammad Mahfooz</h3>
          <p>
            <br />i love hands on systems programming and as little abstraction as possible. interested
            in a broad range of fields in technology-- everything from compiler
            work to back end infrastructure. passionate towards systems dev, back
            end web dev, and platform work.
            <br />
            <br />
            just wrapped up an 8 month work term at OTPP as a Software Engineer Intern. joining canada life for winter &lsquo;24, and NVIDIA
            for summer &lsquo;24.
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
          <div />
        </motion.div>
      </StyledAboutContent>
      <TechStacks />
    </StyledAbout>
  );
};

export default About;
