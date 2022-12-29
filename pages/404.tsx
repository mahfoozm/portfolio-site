import styled from "styled-components";
import { Nav, Footer, Button } from "../src/components";

const StyledNotFound = styled.section`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  justify-content: space-between;

  .notFoundContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: -50px;

    h1 {
      font-size: clamp(70px, 22vw, 150px);
      margin-bottom: -20px;
    }

    h2 {
      font-size: clamp(25px, 5vw, 40px);
      font-weight: var(--font-regular);
      margin-bottom: 30px;
    }

    .redirect-message {
      margin-bottom: 30px;
    }
  }
`;

interface INotFoundProps {
  isHome: boolean;
}

const NotFound: React.FC<INotFoundProps> = ({ isHome }) => {
  return (
    <StyledNotFound>
      <Nav isHome={isHome} />
      <div className="notFoundContent">
        <h1 className="section-heading">404</h1>
        <h2>oopsies.</h2>
        <p className="redirect-message">
          go home. there&apos;s nothing here :(
        </p>
        <Button
          isLink={true}
          buttonUrl="/"
          buttonText="return home"
          className="notFoundButton"
        />
      </div>
      <Footer />
    </StyledNotFound>
  );
};

export default NotFound;
