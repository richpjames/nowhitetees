import React from "react";
import styled from "styled-components/macro";
import { useAudioPlayer } from "react-use-audio-player";
import { VolumeMute, Volume as VolumeIcon } from "grommet-icons";

import { buttonColour, Button } from "../../../../GlobalDefinitions";
import { SideBarContainer } from "../../SidebarDefinitions";

const sliderTrackWidth = "85%";
const sliderTrackHeight = "8.4px";
const boxShadow = null;
const sliderTrackBackgroundColour = "#000000";
const sliderTrackBorderRadius = "1.3px";
const sliderTrackBorder = "0.2px solid #010101";

const thumbBorder = "1px solid #000000";
const thumbHeight = "15px";
const thumbWidth = "8px";
const thumbBorderRadius = "3px";
const thumbBackground = "#ffffff";

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
    width: ${sliderTrackWidth};
    height: ${sliderTrackHeight};
    cursor: pointer;
    box-shadow: ${boxShadow};
    background: ${sliderTrackBackgroundColour};
    border-radius: ${sliderTrackBorderRadius};
    border: ${sliderTrackBorder};
  }
  &::-webkit-slider-thumb {
    box-shadow: ${boxShadow};
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
    width: ${sliderTrackWidth};
    height: ${sliderTrackHeight};
    cursor: pointer;
    animate: 0.2s;
    box-shadow: ${boxShadow};
    background: ${sliderTrackBackgroundColour};
    border-radius: ${sliderTrackBorderRadius};
    border: ${sliderTrackBorder};
  }

  &::-moz-range-thumb {
    box-shadow: ${boxShadow};
    border: ${thumbBorder};
    height: ${thumbHeight};
    width: ${thumbWidth};
    border-radius: ${thumbBorderRadius};
    background: ${thumbBackground};
    cursor: pointer;
  }

  &::-ms-track {
    width: ${sliderTrackWidth};
    height: ${sliderTrackHeight};
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #2a6495;
    border: ${sliderTrackBorder};
    border-radius: calc(${sliderTrackBorderRadius} * 2);
    box-shadow: ${boxShadow};
  }

  &::-ms-fill-upper {
    background: ${sliderTrackBackgroundColour};
    border: ${sliderTrackBorder};
    border-radius: calc(${sliderTrackBorderRadius} * 2);
    box-shadow: ${boxShadow};
  }

  &::-ms-thumb {
    box-shadow: ${boxShadow};
    border: ${thumbBorder};
    height: ${thumbHeight};
    width: ${thumbWidth};
    border-radius: ${thumbBorderRadius};
    background: #${thumbBackground};
    cursor: pointer;
  }

  &:focus::-ms-fill-lower {
    background: ${sliderTrackBackgroundColour};
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
