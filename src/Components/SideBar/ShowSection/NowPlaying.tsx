import React from "react";
import styled from "styled-components/macro";
import { nowPlayingHeight } from "./SideBarDimensions";

const NowPlayingContainer = styled.div`
  width: 100%;
  height: ${nowPlayingHeight}%;
  text-align: center;
`;

const NowPlaying = () => {
  return (
    <NowPlayingContainer>
      <p>Now playing: November '19</p>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
