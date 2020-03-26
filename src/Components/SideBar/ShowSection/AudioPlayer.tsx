import React from "react";
import styled from "styled-components/macro";
import { useAudioPlayer } from "react-use-audio-player";
import { buttonsHeight, SideBarContainer } from "./SideBarDefinitions";

const Container = styled(SideBarContainer)``;

interface IProps {
  file: string;
}

const AudioPlayer: React.FC<IProps> = ({ file }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: false
  });

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <Container height={buttonsHeight} width={100}>
      <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
    </Container>
  );
};

export default AudioPlayer;
