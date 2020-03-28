import React from "react";
import styled from "styled-components/macro";

import {
  SideBarContainer,
  tracklistHeight,
  volTracklistWidth
} from "./SideBarDefinitions";

const Container = styled(SideBarContainer)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;
const PageTitle = styled.h4`
  padding-top: 2.5%;
  padding-bottom: 2.5%;
`;
const TracklistWrap = styled.div`
  overflow-y: scroll;
`;
const Artist = styled.h5``;
const TrackTitle = styled.p``;
const Track = styled.div`
  padding: 5px;
`;
interface IProps {
  tracklist: Track[];
}

const Tracklist = (props: IProps) => {
  const { tracklist } = props;
  const tracklistElems = tracklist.map(track => (
    <Track>
      <Artist>{track.artist}</Artist>
      <TrackTitle>{track.track}</TrackTitle>
    </Track>
  ));
  return (
    <Container height={tracklistHeight} width={volTracklistWidth}>
      <PageTitle>Tracklist:</PageTitle>
      <TracklistWrap> {tracklistElems}</TracklistWrap>
    </Container>
  );
};

export default Tracklist;
