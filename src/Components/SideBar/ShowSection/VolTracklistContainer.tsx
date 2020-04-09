import React from "react";
import styled from "styled-components/macro";

import Volume from "./Volume";
import Tracklist from "./Tracklist";
import { volTracklistWidth, secondSectionHeight } from "./SideBarDefinitions";

const Wrapper = styled.div`
  width: ${volTracklistWidth}%;
  height: ${secondSectionHeight}%;
`;

interface IProps {
  tracklist: Track[];
}

const VolTracklistContainer = (props: IProps) => {
  const { tracklist } = props;

  return (
    <Wrapper>
      <Volume />
      <Tracklist tracklist={tracklist} />
    </Wrapper>
  );
};

export default VolTracklistContainer;
