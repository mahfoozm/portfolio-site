import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledLoader = styled(motion.section)`
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px 0 100px;

  @media only screen and (max-width: 480px) {
    padding: 0 50px 0 50px;
  }
`;
