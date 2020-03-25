import React from "react";
import styled from "styled-components/macro";
import { useAudioPosition } from "react-use-audio-player";

const Container = styled.div`
  align-self: flex-start;
  border: 1px solid black;
  height: 100%;
  width: 100%;
`;

const ProgressBar = styled.div``;

const ProgressCircle = styled.div`
  border: 1px solid green;
  width: ;
  height: 30px;
`;
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
