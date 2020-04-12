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
  const { volume } = useAudioPlayer();
  const [isMuted, setMuted] = React.useState(false);

  const setMute = () => {
    let prevVol = 0.5;
    if (!isMuted) {
      setMuted(true);
      prevVol = volume();
      volume(0);
    } else {
      setMuted(false);
      volume(prevVol);
    }
  };

  const muteButton = (isMuted: boolean) =>
    isMuted ? (
      <VolumeMute color={buttonColour} />
    ) : (
      <VolumeIcon color={buttonColour} />
    );

  const handleChange = React.useCallback(
    (slider: React.ChangeEvent<HTMLInputElement>) => {
      const volValue = parseFloat(
        (Number(slider.target.value) / 100).toFixed(2)
      );
      return volume(volValue);
    },
    [volume]
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
        max={100}
        id="volume"
        onChange={handleChange}
      />
    </Container>
  );
};

export default Volume;
