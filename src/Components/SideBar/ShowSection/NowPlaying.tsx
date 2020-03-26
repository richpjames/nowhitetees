import React from "react";
import styled from "styled-components/macro";
import { nowPlayingHeight, SideBarContainer } from "./SideBarDefinitions";

const NowPlayingContainer = styled(SideBarContainer)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const NowPlayingText = styled.h4``;

const NowPlaying = () => {
  return (
    <NowPlayingContainer height={nowPlayingHeight} width={100}>
      <NowPlayingText>Now playing: November '19</NowPlayingText>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
