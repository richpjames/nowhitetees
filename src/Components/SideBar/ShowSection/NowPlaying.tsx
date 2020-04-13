import React from "react";
import styled from "styled-components/macro";

import { nowPlayingHeight, SideBarContainer } from "../SidebarDefinitions";

const NowPlayingContainer = styled(SideBarContainer)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const NowPlayingText = styled.h4``;

interface IProps {
  showTitle: string;
}
const NowPlaying = (props: IProps) => {
  const { showTitle } = props;
  return (
    <NowPlayingContainer height={nowPlayingHeight} width={100}>
      <NowPlayingText>{showTitle}</NowPlayingText>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
