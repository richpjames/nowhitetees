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
`;

const VolTracklistSection = () => {
  return (
    <Container height={secondSectionHeight} width={volTracklistWidth}>
      <Volume />
      <Tracklist />
    </Container>
  );
};

export default VolTracklistSection;
