import React from "react";
import styled from "styled-components/macro";
import { useAudioPosition, useAudioPlayer } from "react-use-audio-player";
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

const ProgressWrap = styled.div`
  height: 80%;
`;

const ProgressBar = styled.div`
  width: 280%;
  transform: rotate(90deg);
  transform-origin: left;
  margin-left: 50%;
  padding-left: 50%;
  margin-top: -20%;
`;

const TimeBox = styled.div`
  height: 5%;
  padding-bottom: 5%;
  padding-top: 5%;
`;

const ProgressIndicator = () => {
  const { position, duration } = useAudioPosition({
    highRefreshRate: true
  });
  const { seek, loading, ready } = useAudioPlayer();
  const notLoadingAndReady = !loading && ready;
  const sBits = [];
  let count = 0;
  while (count < duration) {
    sBits.push(count);
    count++;
  }
  const seconds = sBits.map(second => <div key={second} />);
  let loadedDuration: number = duration;

  React.useEffect(() => {}, [duration]);

  return (
    <Container height={secondSectionHeight} width={progressWidth}>
      <TimeBox>00:00</TimeBox>
      <ProgressWrap></ProgressWrap>
      <TimeBox>
        {duration > 0 ? `${Math.floor(duration / 60)}:00` : `00:00`}
      </TimeBox>
    </Container>
  );
};

export default ProgressIndicator;
