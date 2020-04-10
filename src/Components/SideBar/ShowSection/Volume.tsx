import React from "react";
import styled from "styled-components/macro";
import { useAudioPlayer } from "react-use-audio-player";
import { VolumeMute, Volume as VolumeIcon } from "grommet-icons";

import { buttonColour, Button } from "../../../GlobalDefinitions";
import { SideBarContainer } from "./SideBarDefinitions";

const Container = styled(SideBarContainer)`
  display: flex;
  align-items: center;
`;

const VolumeSlider = styled.input`
  width: 70%;
`;

const Volume = () => {
  const { volume, mute } = useAudioPlayer();
  const [isMuted, setMuted] = React.useState(false);

  const setMute = () => {
    if (!isMuted) {
      setMuted(true);
      mute();
    } else {
      setMuted(false);
      mute();
    }
  };

  const muteButton = (isMuted: boolean) =>
    isMuted ? (
      <VolumeMute color={buttonColour} />
    ) : (
      <VolumeIcon color={buttonColour} />
    );

  return (
    <Container height={15} width={100}>
      <label htmlFor="mute" className="visuallyHidden">
        Mute
      </label>
      <Button id="mute" onClick={() => setMute()}>
        {muteButton(isMuted)}
      </Button>
      <label htmlFor="volume" className="visuallyHidden">
        Volume
      </label>
      <VolumeSlider
        type="range"
        min={0}
        max={1}
        id="volume"
        onChange={({ target }) => volume(+target.value)}
      />
    </Container>
  );
};

export default Volume;
