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

const ShowCardWrap = styled.div`
  display: flex;
  border: 1px solid;
  margin-right: ${horizontalMargin}px;
  margin-bottom: ${verticalMargin}px;
  position: relative;
  width: ${showCardWidth}px;
  height: ${showCardHeight}px;
`;

const ShowCardWrapExtended = styled(ShowCardWrap)`
  width: ${showCardWidth * 2 + horizontalMargin}px;
  height: ${showCardHeight * 2 + verticalMargin}px;
`;

interface Props {
  id: string;
  className: string;
  onClick: () => void;
  selected: boolean;
}

const ShowCard: React.SFC<Props> = (props: Props) => {
  const { id, onClick, selected } = props;
  const show: Show = Shows.getShowById(id);
  const { photoPath, title, djs } = show;
  return selected ? (
    <ShowCardWrapExtended>
      <Box alignSelf="center">
        <ShowReelImage path={photoPath} className="Image" />
      </Box>
      <MetaWrap className="MetaWrap">
        <Title title={title} />
        <DJs djs={djs}></DJs>
        <FeaturedArtists id={id} />
      </MetaWrap>
    </ShowCardWrapExtended>
  ) : (
    <ShowCardWrap className="ShowCardWrap" onClick={onClick}>
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
