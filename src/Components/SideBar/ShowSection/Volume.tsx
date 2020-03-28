import React from "react";
import styled from "styled-components/macro";
// import { Howler } from "howler";

import { SideBarContainer } from "./SideBarDefinitions";

// out of use until react-use-audio-player exposes volume control

const Container = styled(SideBarContainer)``;

const Volume = () => {
  return (
    <Container height={15} width={100}>
      <label htmlFor="volume">Volume</label>
      <input
        type="range"
        min={0}
        max={1}
        id="volume"
        // onChange={({ target }) => Howler.volume(+target.value)}
      />
    </Container>
  );
};

export default Volume;
