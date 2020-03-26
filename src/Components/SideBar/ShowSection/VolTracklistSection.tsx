import React from "react";
import styled from "styled-components/macro";
import { secondSectionHeight, volTracklistWidth } from "./SideBarDimensions";
import Tracklist from "./Tracklist";
import Volume from "./Volume";

const Container = styled.div`
  height: ${secondSectionHeight}%;
  width: ${volTracklistWidth}%;
  display: flex;
  flex-wrap: wrap;
`;

const VolTracklistSection = () => {
  return (
    <Container>
      <Volume />
      <Tracklist />
    </Container>
  );
};

export default VolTracklistSection;
