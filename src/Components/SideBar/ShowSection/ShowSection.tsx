import React from "react";
import styled from "styled-components/macro";
import { AudioPlayerProvider } from "react-use-audio-player";

import NowPlaying from "./NowPlaying";
import ProgressIndicator from "./ProgressIndicator";
import AudioPlayer from "./AudioPlayer";
import VolTracklistSection from "./VolTracklistSection";

const SectionContainer = styled.div`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

const ShowSection = () => {
  return (
    <AudioPlayerProvider>
      <SectionContainer>
        <NowPlaying />
        <AudioPlayer file="https://nowhitetees.co.uk/recordings/30_03_2019.mp3" />
        <ProgressIndicator />
        <VolTracklistSection />
      </SectionContainer>
    </AudioPlayerProvider>
  );
};

export default ShowSection;
