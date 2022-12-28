import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAbout = styled(motion.section)`
  max-width: 1000px;
  padding: 40px 100px;
  height: auto;
  margin-bottom: 0px;

  @media only screen and (max-width: 1000px) {
    padding: 40px 50px;
  }

  @media only screen and (max-width: 900px) {
    padding: 40px 0px;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledAboutContent = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .image-wrapper {
    position: relative;
    width: 300px;
    height: 422px;
    border-radius: var(--bdr);
    overflow: hidden;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .image-wrapper-square {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: var(--bdr);
    overflow: hidden;
    margin-top: 50px;

    @media only screen and (max-width: 768px) {
      display: none;
    }

    @media only screen and (max-width: 480px) {
      width: 230px;
      height: 230px;
    }

    @media only screen and (max-width: 400px) {
      width: 200px;
      height: 200px;
    }

    @media only screen and (max-width: 330px) {
      width: 170px;
      height: 170px;
    }
  }

  .about-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .grayscale {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: gray;
    mix-blend-mode: saturation;
    opacity: 1;
    transition: var(--transition3);

    :hover {
      opacity: 0;
    }
  }

  .hidden-image {
    display: none;

    @media only screen and (max-width: 768px) {
      display: block;
    }
  }

  .about-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }

    h3 {
      font-size: 40px;
      font-weight: 300;
      margin-bottom: 10px;
    }

    h4 {
      text-transform: uppercase;
      font-size: var(--fz-md);
      margin-bottom: 30px;
    }

    p {
      color: ${({ theme }) => theme.textSecond};
    }
  }
`;
