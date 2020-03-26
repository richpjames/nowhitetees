import React from "react";
import styled from "styled-components/macro";
import { useAudioPlayer, useAudioPosition } from "react-use-audio-player";
import {
  PlayFill,
  PauseFill,
  StopFill,
  ForwardTen,
  BackTen
} from "grommet-icons";

import { buttonsHeight, SideBarContainer } from "./SideBarDefinitions";
import { buttonColour, Button } from "../../../GlobalDefinitions";

const Container = styled(SideBarContainer)`
  padding-left: 15%;
  padding-right: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface IProps {
  file: string;
}

declare type BackOrForth = "back" | "forth";

const PlaybackButtons: React.FC<IProps> = ({ file }) => {
  const {
    loading,
    playing,
    ready,
    seek,
    stop,
    togglePlayPause
  } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: false
  });
  const { position } = useAudioPosition();

  const seek10Secs = (direction: BackOrForth) => {
    if (direction === "forth") {
      seek(position + 10);
    } else {
      seek(position - 10);
    }
  };

  // if (!ready && !loading) return <div>No audio to play</div>;
  // if (loading) return <div>Loading audio</div>;
  const playPauseButton = (isPlaying: boolean) =>
    isPlaying ? (
      <PauseFill color={buttonColour} />
    ) : (
      <PlayFill color={buttonColour} />
    );

  return (
    <Container height={buttonsHeight} width={100}>
      <Button
        onClick={() => {
          seek10Secs("back");
        }}
      >
        <BackTen color={buttonColour} />
      </Button>
      <div>
        <Button onClick={togglePlayPause}>{playPauseButton(playing)}</Button>
        <Button onClick={() => stop()}>
          <StopFill color={buttonColour} />
        </Button>
      </div>
      <Button
        onClick={() => {
          seek10Secs("forth");
        }}
      >
        <ForwardTen color={buttonColour} />
      </Button>
    </Container>
  );
};

export default PlaybackButtons;
