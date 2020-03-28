import styled from "styled-components/macro";

export const height = 100;
export const nowPlayingHeight = 10;
export const buttonsHeight = 10;
export const secondSectionHeight = height - (nowPlayingHeight + buttonsHeight);
export const volumeHeight = 15;
export const tracklistHeight = secondSectionHeight;

export const width = 100;
export const progressWidth = 33.3;
export const volTracklistWidth = width - progressWidth;

export const borderWidth = 1;

export const SideBarContainer = styled.div<{ height: number; width: number }>`
  border: ${borderWidth}px solid black;
  width: ${({ width }) => `calc(${width}% - ${2 * borderWidth}px)`};
  height: ${({ height }) => `calc(${height}% - ${2 * borderWidth}px)`};
`;
