import React from "react";
import styled from "styled-components/macro";
import { useAudioPosition } from "react-use-audio-player";
import {
  secondSectionHeight,
  progressWidth,
  SideBarContainer
} from "./SideBarDefinitions";

const Container = styled(SideBarContainer)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: calc(${secondSectionHeight}% - 2px);
  width: calc(${progressWidth}% - 2px);
`;

const ProgressBar = styled.div`
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 0px;
`;

const ProgressCircle = styled.div`
  background-color: yellow;
  border-radius: 100%;
  height: 15px;
  width: 15px;
  transform: translateX(-7.5px) translateY(-7.5px);
  display: box;
`;
const TimeBox = styled.div`
  height: 5%;
  padding-bottom: 5%;
  padding-top: 5%;
`;
const Spacer = styled.div<{ height: number }>`
  height: ${({ height }) => height}%;
`;

const ProgressIndicator = () => {
  const { position, duration } = useAudioPosition({ highRefreshRate: true });
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    setPercent((position / duration) * 100 || 0);
  }, [position, duration]);

  return (
    <Container height={secondSectionHeight} width={progressWidth}>
      <TimeBox>00:00</TimeBox>
      <ProgressBar>
        <Spacer height={percent} />
        <ProgressCircle />
      </ProgressBar>
      <TimeBox>{duration}</TimeBox>
    </Container>
  );
};

export default ProgressIndicator;
