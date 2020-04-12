import React from "react";
import { useAudioPlayer } from "react-use-audio-player";

interface IProps {
  file: string;
}

const urlPrefix = `https://nowhitetees.co.uk/recordings/`;

const AudioPlayer = (props: IProps) => {
  const { file } = props;
  useAudioPlayer({
    src: `${urlPrefix}${file}`,
    format: "mp3",
    autoplay: false
  });
  return <></>;
};

export default AudioPlayer;
