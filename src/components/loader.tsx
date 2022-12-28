import React from "react";
import NameLoader from "./icons/NameLoader";
import { StyledLoader } from "../styles/componentStyles";

const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  return (
    <StyledLoader>
      <NameLoader finishLoading={finishLoading} />
    </StyledLoader>
  );
};

export default Loader;
