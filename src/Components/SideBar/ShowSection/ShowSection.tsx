import React from "react";
import styled from "styled-components/macro";
import { AudioPlayerProvider } from "react-use-audio-player";

import NowPlaying from "./NowPlaying";
import ProgressIndicator from "./ProgressIndicator";
import AudioPlayer from "./AudioPlayer";
import Volume from "./Volume";
import Tracklist from "./Tracklist";

const SectionContainer = styled.div`
  display: flex;
  flex-wrap:
  border: 1px solid red;
`;

const ShowSection = () => {
  return (
    <AudioPlayerProvider>
      <SectionContainer>
        <NowPlaying />
        <AudioPlayer file="https://nowhitetees.co.uk/recordings/30_03_2019.mp3" />
        <ProgressIndicator />
        <Volume />
        <Tracklist />
      </SectionContainer>
    </AudioPlayerProvider>
  );
};

export default ShowSection;
