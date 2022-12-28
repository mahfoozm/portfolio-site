import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "./theme";
import Variables from "./variables";

export const GlobalStyles = createGlobalStyle<ThemeProps>`
  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.textMain};
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.textMain};
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    width: 100%;
    min-height: 100%;
    padding: 0 60px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textMain};
    font-size: var(--fz-md);
    line-height: 1.3;
    overflow-x: hidden;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    @media only screen and (max-width: 768px) {
      padding: 0 35px;
    }

    @media only screen and (max-width: 380px) {
      padding: 0 20px;
    }
  }

  section {
    max-width: var(--max-width);
    height: 100vh;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  .section-heading {
    margin-bottom: 40px;
    width: 100%;
    color: ${({ theme }) => theme.textMain};
    font-weight: 700;
    font-size: clamp(35px, 6vw, var(--fz-heading));

    @media only screen and (max-width: 600px) {
      margin-bottom: 20px;
    }

    :after {
      bottom: 4px;
      counter-increment: section;
      content: '.';
      margin-left: 5px;
      color: ${({ theme }) => theme.accentMain};
      font-size: 65px;
      font-weight: 700;
    }
  }

  a, p, h1, h2, h3, h4, h5, h6, li {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  a, p, li {
    font-weight: 500;
  }

  p {
    @media only screen and (max-width: 480px) {
      font-size: var(--fz-sm);
    }
  }

  a {
    text-decoration: none;
    transition: var(--transition2);

    :link,
    :active {
      color: ${({ theme }) => theme.textMain};
    }

    :visited,
    :focus {
      color: ${({ theme }) => theme.textMain};
    }

    :hover {
      color: ${({ theme }) => theme.accentMain};
    }
  }

  ol,
  ul {
    list-style: none;
  }

  .link {
    color: ${({ theme }) => theme.textMain};
    position: relative;

    :hover ::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -3px;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: ${({ theme }) => theme.accentMain};
      transition: var(--transition2);
    }
  }

  .active-link {
    color: ${({ theme }) => theme.textMain};
    position: relative;

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -3px;
      height: 2px;
      border-radius: 1px;
      width: 100%;
      background-color: ${({ theme }) => theme.accentMain};
      transition: var(--transition2);
    }
  }

  .unscrollable::-webkit-scrollbar {
    scrollbar-width: none;
    overflow: -moz-hidden-unscrollable;
  }
`;
