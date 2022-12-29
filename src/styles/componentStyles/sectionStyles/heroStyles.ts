import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHero = styled.section`
  align-items: center;
  width: 100%;
  max-height: calc(100vh - var(--nav-height));
  max-width: var(--max-width);
`;

export const StyledHeroContainer = styled.div`
  padding: 0 120px;
  height: calc(100% - 50px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 680px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 400px) {
    padding: 0 0px;
  }
`;

export const StyledHeroContent = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    text-align: center;
  }

  h1 {
    font-weight: 500;
    font-size: 26px;
    margin-bottom: 20px;

    @media only screen and (max-width: 600px) {
      font-size: 20px;
    }
  }

  h2 {
    margin-left: -8px;
    font-weight: 500;
    font-size: clamp(28px, 7vw, 85px);
    margin-bottom: 10px;
    position: relative;
    max-width: 720px;
  }

  h3 {
    font-weight: 500;
    font-size: clamp(16px, 5vw, 45px);
    margin-bottom: 16px;
    color: ${({ theme }) => theme.textSecond};

    @media only screen and (max-width: 1000px) {
      margin-left: 0;
    }
  }

  .buttons-container {
    display: flex;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  .hero-buttons {
    margin-top: 30px;

    @media only screen and (min-width: 600px) {
      :not(:last-child) {
        margin-right: 20px;
      }
    }

    @media only screen and (max-width: 1000px) {
      margin: 30px auto 0 auto;
    }
  }

  .icon-container {
    transform: scale(1);

    :hover {
      transform: scale(2);
    }
  }
`;
