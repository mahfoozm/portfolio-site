import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledToggle = styled(motion.div)`
  cursor: pointer;
  height: 25px;
  width: 25px;

  :hover .icons {
    color: ${({ theme }) => theme.accentMain};
  }

  .icons {
    transition: var(--transition2);
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.textMain};
  }
`;
