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

const ProgressBar = styled.input`
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
  const { position, duration } = useAudioPosition({ highRefreshRate: true });
  const { seek } = useAudioPlayer();
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    setPercent((position / duration) * 100 || 0);
  }, [position, duration]);

  return (
    <Container height={secondSectionHeight} width={progressWidth}>
      <TimeBox>00:00</TimeBox>
      <ProgressWrap>
        <ProgressBar
          type="range"
          min={0}
          max={100}
          value={percent}
          onChange={({ target }) => {
            const decimalOfPercent = +target.value / 100;
            const durationToSeek = (duration * decimalOfPercent) / 600;
            console.log(durationToSeek, duration);
            seek(durationToSeek);
          }}
        />
      </ProgressWrap>
      <TimeBox>
        {duration > 0 ? `${Math.floor(duration / 60)}:00` : `00:00`}
      </TimeBox>
    </Container>
  );
};

export default ProgressIndicator;
