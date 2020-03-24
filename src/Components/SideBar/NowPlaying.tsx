import React from "react";
import styled from "styled-components/macro";

const NowPlayingContainer = styled.div`
  margin-top: 7.5%;
  margin-bottom: 7.5%;
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
