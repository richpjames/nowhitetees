import React from "react";
import styled from "styled-components/macro";
import {
  secondSectionHeight,
  volTracklistWidth,
  SideBarContainer
} from "./SideBarDefinitions";
import Tracklist from "./Tracklist";
import Volume from "./Volume";

const Container = styled(SideBarContainer)`
  display: flex;
  flex-wrap: wrap;
  border: none;
  width: ${volTracklistWidth}%;
`;

const VolTracklistSection = () => {
  return (
    <Container height={secondSectionHeight} width={volTracklistWidth}>
      <Tracklist />
    </Container>
  );
};

export default VolTracklistSection;
