import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../configs/animations';
import { Button } from '../index';
import {
  StyledHero,
  StyledHeroContainer,
  StyledHeroContent
} from '../../styles/componentStyles';

const Hero = () => {
  const one = <h1>hi, my name is</h1>;
  const two = <h2>Mohammad Mahfooz.</h2>;
  const three = (
    <h3>
      i&apos;m a fourth year Software Engineering student studying at York
      University.
    </h3>
  );
  const heroTexts = [one, two, three];

  const heroContainerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.2,
        when: 'beforeChildren'
      }
    }
  };

  return (
    <StyledHero>
      <StyledHeroContainer>
        <StyledHeroContent
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {heroTexts.map((text, i) => (
            <motion.div variants={fadeUp} key={i}>
              {text}
            </motion.div>
          ))}
          <motion.div className="buttons-container" variants={fadeUp}>
            <Button
              isLink={false}
              className="hero-buttons"
              buttonUrl="/assets/resume.pdf"
              buttonText="resume"
              rel="noopener noreferrer"
              target="_blank"
            />
            <Button
              isLink={false}
              className="hero-buttons"
              buttonUrl="#contact"
              buttonText="contact"
            />
          </motion.div>
        </StyledHeroContent>
      </StyledHeroContainer>
    </StyledHero>
  );
};

export default Hero;
