import React from "react";
import styled from "styled-components/macro";
import { PlayFill, PauseFill } from "grommet-icons";

const ProgressContainer = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 30%;
  align-self: flex-start;
`;
const ProgressIndicator = () => {
  return (
    <ProgressContainer>
      <div>
        <PlayFill color="black" />
      </div>
      <div>
        <PauseFill color="black" />
      </div>
    </ProgressContainer>
  );
};

export default ProgressIndicator;
