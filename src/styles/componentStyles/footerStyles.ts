import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: var(--nav-height);
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;

  a {
    font-size: var(--fz-sm);
    font-weight: 500;
  }
`;

export const StyledSocialLinks = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  a {
    padding: 5px;
    transition: var(--transition2);

    :not(:last-child) {
      margin-right: 25px;
    }

    :hover {
      transform: translateY(-7px);
    }
  }

  .icon {
    width: 22px;
    height: 22px;
  }
`;
