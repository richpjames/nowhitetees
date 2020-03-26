import React from "react";
import styled from "styled-components/macro";
import { nowPlayingHeight } from "./SideBarDimensions";

const NowPlayingContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${nowPlayingHeight}%;
  justify-content: center;
  width: 100%;
`;

const NowPlayingText = styled.h4``;

const NowPlaying = () => {
  return (
    <NowPlayingContainer>
      <NowPlayingText>Now playing: November '19</NowPlayingText>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
