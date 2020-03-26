import React from "react";
import styled from "styled-components/macro";
import { AudioPlayerProvider } from "react-use-audio-player";

import NowPlaying from "./NowPlaying";
import ProgressIndicator from "./ProgressIndicator";
import AudioPlayer from "./AudioPlayer";
import VolTracklistSection from "./VolTracklistSection";
import { SideBarContainer } from "./SideBarDefinitions";

const SectionContainer = styled(SideBarContainer)`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

const ShowSection = () => {
  return (
    <AudioPlayerProvider>
      <SectionContainer height={100} width={100}>
        <NowPlaying />
        <AudioPlayer file="https://nowhitetees.co.uk/recordings/30_03_2019.mp3" />
        <ProgressIndicator />
        <VolTracklistSection />
      </SectionContainer>
    </AudioPlayerProvider>
  );
};

export default ShowSection;
