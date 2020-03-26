import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 15%;
  width: 100%;
`;

const Volume = () => {
  return (
    <Container>
      <label htmlFor="volume">Volume</label>
      <input type="range" min={0} max={100} id="volume" />
    </Container>
  );
};

export default Volume;
