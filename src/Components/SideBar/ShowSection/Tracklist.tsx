import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  border: 1px solid black;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
`;

const Tracklist = () => {
  return (
    <Container>
      <h4>Tracklist:</h4>
    </Container>
  );
};

export default Tracklist;
