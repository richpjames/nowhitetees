import React from "react";
import { AudioPlayerProvider } from "react-use-audio-player";

import NowPlaying from "./NowPlaying";
import ProgressIndicator from "./ProgressIndicator";
import AudioPlayer from "./AudioPlayer";

const PlaySection = () => {
  return (
    <AudioPlayerProvider>
      <AudioPlayer file="https://nowhitetees.co.uk/recordings/30_03_2019.mp3" />
      <NowPlaying />
      <ProgressIndicator />
    </AudioPlayerProvider>
  );
};

export default PlaySection;
