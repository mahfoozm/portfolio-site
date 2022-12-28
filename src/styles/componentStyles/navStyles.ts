import styled from 'styled-components';

export const StyledNav = styled.header<{
  prevScrollPos: number;
  curScrollPos: number;
}>`
  z-index: 9999;
  display: flex;
  align-items: center;
  max-width: var(--max-width);
  height: var(--nav-height);
  position: relative;
  transition: var(--transition2);
  transition: top 0.2s ease-in-out;

  .nav {
    width: 100%;
    max-width: var(--max-width);
    height: var(--nav-height);
    background-color: ${({ theme }) => theme.titleCard};
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    position: fixed;
    top: ${({ prevScrollPos, curScrollPos }) =>
      prevScrollPos > curScrollPos ? '0' : '-100%'};
    transition: top 0.55s ease-in-out;
  }

  a {
    font-size: var(--fz-sm);
    transition: var(--transition2);

    :hover {
      color: ${({ theme }) => theme.accentMain};
    }
  }
`;

export const StyledLinks = styled.div`
  padding-right: 70px;
  @media only screen and (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;

    li {
      margin-right: 50px;
    }
  }
`;
