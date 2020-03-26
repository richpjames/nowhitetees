import React from "react";
import styled from "styled-components/macro";
import { SideBarContainer } from "./SideBarDefinitions";

const Container = styled(SideBarContainer)``;

const Volume = () => {
  return (
    <Container height={15} width={100}>
      <label htmlFor="volume">Volume</label>
      <input type="range" min={0} max={100} id="volume" />
    </Container>
  );
};

export default Volume;
