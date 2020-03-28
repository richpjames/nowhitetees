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

const ProgressBar = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Second = styled.div<{ currentPercentile: boolean }>`
  width: 60%;
  height: 1%;
  background-color: #000000;
  ${({ currentPercentile }) =>
    currentPercentile &&
    `background-color: #9B9B9B;
     width: 100%;
     height: 1.5%;
     `}
`;
const TimeBox = styled.div`
  height: 5%;
  padding-bottom: 5%;
  padding-top: 5%;
`;

const ProgressIndicator = () => {
  const { position, duration } = useAudioPosition();
  const { seek } = useAudioPlayer();
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    setPercent(Math.round((position / duration) * 100 || 0));
  }, [position, duration]);

  const seekPosition = (percent: number) => {
    seek(duration * (percent / 100));
  };

  const sBits = [];
  for (var i = 0; i < 101; i++) {
    sBits.push(i);
  }
  const seconds = sBits.map(percentOfDiv => {
    return (
      <Second
        key={percentOfDiv}
        currentPercentile={percentOfDiv === percent}
        onClick={() => seekPosition(percentOfDiv)}
      />
    );
  });

  return (
    <Container height={secondSectionHeight} width={progressWidth}>
      <TimeBox>00:00</TimeBox>
      <ProgressBar>{seconds}</ProgressBar>
      <TimeBox>
        {duration > 0 ? `${Math.floor(duration / 60)}:00` : `00:00`}
      </TimeBox>
    </Container>
  );
};

export default ProgressIndicator;
