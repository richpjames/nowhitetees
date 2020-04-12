import React from "react";
import styled from "styled-components/macro";
import { AudioPlayerProvider } from "react-use-audio-player";

import { SideBarContainer } from "./SideBarDefinitions";
import { AppContext } from "../../../AppContext";
import NowPlaying from "./NowPlaying";
import AudioPlayer from "./AudioPlayer";
import ProgressIndicator from "./ProgressIndicator";
import Show from "../../../Models/Show";
import Shows from "../../../ShowsData";
import VolTracklistContainer from "./VolTracklistContainer";
import PlaybackButtons from "./PlaybackButtons";

const SectionContainer = styled(SideBarContainer)`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

const ShowSection = () => {
  const { sidebarShowDate: showDate } = React.useContext(AppContext);
  const show: Show = Shows.getShowByDate(showDate);
  const showTitle = show ? show.title : "";
  const showUrl = show ? show.url : "";
  const tracklist = show ? show.getTracksOnly() : [];

  return (
    <AudioPlayerProvider>
      <SectionContainer height={70} width={100}>
        <NowPlaying showTitle={showTitle} />
        <AudioPlayer file={showUrl} />
        <PlaybackButtons />
        <ProgressIndicator />
        <VolTracklistContainer tracklist={tracklist} />
      </SectionContainer>
    </AudioPlayerProvider>
  );
};

export default ShowSection;
