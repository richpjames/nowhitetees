import React from "react";
import styled from "styled-components/macro";
import { useAudioPosition } from "react-use-audio-player";
import { secondSectionHeight, progressWidth } from "./SideBarDimensions";

const Container = styled.div`
  width: ${progressWidth}%;
  height: ${secondSectionHeight}%;
`;

const ProgressBar = styled.div``;

const ProgressCircle = styled.div``;
const ProgressIndicator = () => {
  const { position, duration } = useAudioPosition({ highRefreshRate: true });
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    setPercent((position / duration) * 100 || 0);
  }, [position, duration]);

  return (
    <Container>
      <ProgressBar />
      <ProgressCircle />
    </Container>
  );
};

export default ProgressIndicator;
