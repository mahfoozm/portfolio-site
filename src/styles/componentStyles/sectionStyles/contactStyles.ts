import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledContact = styled(motion.section)`
  height: auto;
  padding: 50px 300px;
  text-align: center;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1400px) {
    padding: 50px 20%;
  }

  @media only screen and (max-width: 1080px) {
    padding: 50px 10%;
  }

  @media only screen and (max-width: 1000px) {
    padding: 50px 30px;
  }

  @media only screen and (max-width: 768px) {
    padding: 50px 0;
  }

  h2 {
    @media only screen and (max-width: 768px) {
      line-height: 0.8;
    }

    @media only screen and (max-width: 600px) {
      line-height: 0.6;
      margin-bottom: 40px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 22px;
      line-height: 0.4;
    }
  }

  .contact-p {
    color: ${({ theme }) => theme.textSecond};
    width: 85%;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }

  .message-button {
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export default StyledContact;
