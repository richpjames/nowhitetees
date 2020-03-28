import React from "react";
import styled from "styled-components/macro";
import { Box } from "grommet";

import Show from "../../../Models/Show";
import Shows from "../../../ShowsData";
import Title from "./Title";
import ShowReelImage from "./ShowReelImage";
import DJs from "./DJs";
import FeaturedArtists from "./FeaturedArtists";

const MetaWrap = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  min-width: 30%;
`;
const showCardWidth = 400;
const showCardHeight = 250;
const horizontalMargin = 35;
const verticalMargin = 25;

const ShowCardWrap = styled.div<{ width: number; height: number }>`
  display: flex;
  border: 1px solid;
  margin-right: ${horizontalMargin}px;
  margin-bottom: ${verticalMargin}px;
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

interface IProps {
  id: string;
  className: string;
  onClick: (date: string) => void;
  selected: boolean;
  date: string;
}

const ShowCard: React.SFC<IProps> = (props: IProps) => {
  const { id, onClick, selected, date } = props;
  const show: Show = Shows.getShowById(id);
  const { photoPath, title, djs } = show;
  return selected ? (
    <ShowCardWrap
      width={showCardWidth * 2 + horizontalMargin}
      height={showCardHeight * 2 + verticalMargin}
      onClick={() => onClick("")}
    >
      <Box alignSelf="center">
        <ShowReelImage path={photoPath} className="Image" />
      </Box>
      <MetaWrap className="MetaWrap">
        <Title title={title} />
        <FeaturedArtists id={id} />
      </MetaWrap>
    </ShowCardWrap>
  ) : (
    <ShowCardWrap
      className="ShowCardWrap"
      onClick={() => onClick(date)}
      height={showCardHeight}
      width={showCardWidth}
    >
      <Box alignSelf="center">
        <ShowReelImage path={photoPath} className="Image" />
      </Box>
      <MetaWrap className="MetaWrap">
        <Title title={title} />
        <DJs djs={djs}></DJs>
        <FeaturedArtists id={id} />
      </MetaWrap>
    </ShowCardWrap>
  );
};

export default ShowCard;
