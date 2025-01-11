import React from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '../../hooks/useScrollReveal';
import { parentVar, fadeUp } from '../../configs/animations';
import { Button } from '../';
import { StyledContact } from '../../styles/componentStyles';

const Contact = () => {
  const [ref, controls] = useScrollReveal(-250);

  return (
    <StyledContact
      variants={parentVar}
      initial="initial"
      animate={controls}
      ref={ref}
      id="contact"
    >
      <motion.h2 variants={fadeUp} className="section-heading">
        contact
      </motion.h2>
      <motion.p variants={fadeUp} className="contact-p">
        not actively seeking new positions, but please feel free to contact me!
      </motion.p>
      <motion.div variants={fadeUp}>
        <Button
          isLink={false}
          className="message-button"
          buttonText="EMAIL"
          buttonUrl="mailto:mohammadmahfoozpersonal@gmail.com"
          target="_blank"
          rel="noreferrer"
        />
      </motion.div>
    </StyledContact>
  );
};

export default Contact;
