import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenu = styled(motion.div)<{
  menuOpen: boolean;
}>`
  display: none;
  position: ${({ menuOpen }) => (menuOpen ? 'fixed' : 'absolute')};
  right: 35px;
  z-index: 9999;
  margin-right: 35px;

  .hamburger-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-35px, -50%);
    width: 35px;
    height: 35px;
    border: 2px solid ${({ theme }) => theme.textMain};
    cursor: pointer;
    z-index: 15;

    :hover {
      border: 2px solid ${({ theme }) => theme.accentMain};
      transition: var(--transition3);
    }

    :hover li {
      background: ${({ theme }) => theme.accentMain};
    }
  }
  .hamburger-button li {
    list-style: none;
    position: absolute;
    left: 10%;
    transform: translate(0, -50%);
    width: 80%;
    height: 4px;
    background: ${({ theme }) => theme.textMain};
    opacity: 1;
    transition: transform 0.3s, top 0.3s, opacity 0.3s;
    transition-delay: 0s, 0.3s, 0.3s;
  }

  ul li:nth-child(1) {
    top: 25%;
  }
  ul li:nth-child(2) {
    top: 50%;
  }
  ul li:nth-child(3) {
    top: 75%;
  }
  ul.active li {
    transition: top 0.3s, transform 0.3s, opacity 0.5s;
    transition-delay: 0s, 0.3s, 0.3s;
  }
  ul.active li:nth-child(1) {
    top: 50%;
    transform: translate(0, -50%) rotate(-45deg);
  }
  ul.active li:nth-child(2) {
    opacity: 0;
  }
  ul.active li:nth-child(3) {
    top: 50%;
    transform: translate(0, -50%) rotate(45deg);
  }

  }
`;

export const StyledSidebar = styled.div<{ menuOpen: boolean }>`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${({ menuOpen }) => (menuOpen ? '120vw' : '0')};
  height: 100vh;
  background: ${({ theme }) => theme.menuNav};
  opacity: 0.7;
  transition: var(--transition2);
`;
