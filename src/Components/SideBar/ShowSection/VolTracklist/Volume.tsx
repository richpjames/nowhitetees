import React from "react";
import styled from "styled-components/macro";
import { useAudioPlayer } from "react-use-audio-player";
import { VolumeMute, Volume as VolumeIcon } from "grommet-icons";

import { buttonColour, Button } from "../../../../GlobalDefinitions";
import { SideBarContainer } from "../../SidebarDefinitions";

const Container = styled(SideBarContainer)`
  display: flex;
  align-items: center;
`;

const VolumeSlider = styled.input`
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
  :focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  :focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }

  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  &:focus::-ms-fill-lower {
    background: #3071a9;
  }

  &:focus::-ms-fill-upper {
    background: #367ebd;
  }
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
