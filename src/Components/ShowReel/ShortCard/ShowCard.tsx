import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { PlayFill, Download, Contract } from "grommet-icons";

import { Button, buttonColour } from "../../../GlobalDefinitions";
import { AppContext } from "../../../AppContext";
import DJs from "./DJs";
import FeaturedArtists from "./FeaturedArtists";
import Show from "../../../Models/Show";
import ShowReelImage from "./ShowReelImage";
import Shows from "../../../ShowsData";
import Title from "./Title";

const horizontalMargin = 35;
const verticalMargin = 25;
const showCardWidth = 100 / 2;

const ShowCardWrap = styled.div<{
  width: number;
  height?: number;
  selected: boolean;
  rightMargin: boolean;
}>`
  display: flex;
  border: 1px solid;
  margin-bottom: ${verticalMargin}px;
  position: relative;
  width: calc(${({ width }) => width}% - ${horizontalMargin}px);
  height: ${({ height }) => (height ? `${height}vh` : "inherit")};
  transition: width 0.5s ease-out;
  cursor: pointer;
  ${({ rightMargin }) =>
    rightMargin &&
    `margin-right: ${horizontalMargin}px;
  `}
  ${({ selected, width }) =>
    selected &&
    `
      width: calc((${width}% * 2) - (${horizontalMargin}px ));
      margin-right: 0;
    `}
`;

const MetaWrap = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  min-width: 30%;
`;
const ButtonsWrap = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-self: center;
  margin-top: auto;
  margin-bottom: 10%;
`;
const fadeIn = keyframes`
  0% {
  opacity: 0;
  visibility: hidden;  }
  100% {
    opacity: 1;
    visibility: visible;  }
`;
const CollapseButton = styled(Button)`
  margin-left: auto;
  margin-bottom: 2.5%;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

interface IProps {
  id: string;
  className: string;
  onClick: (date: Date) => void;
  selected: boolean;
  date: Date;
  rightMargin: boolean;
}

const ShowCard: React.SFC<IProps> = (props: IProps) => {
  const { id, onClick, selected, date, rightMargin } = props;
  const { setSidebarShowDate } = React.useContext(AppContext);

  const show: Show = Shows.getShowById(id);
  const { photoPath, title, djs } = show;

  return selected ? (
    <ShowCardWrap width={showCardWidth} selected={selected} rightMargin={false}>
      <ShowReelImage path={photoPath} onClick={() => onClick(new Date())} />
      <MetaWrap>
        <Title title={title} /> <DJs djs={djs}></DJs>
        <FeaturedArtists id={id} />
        <ButtonsWrap>
          <Button onClick={() => setSidebarShowDate(date)}>
            <PlayFill color={buttonColour} />
          </Button>
          <Button>
            <Download color={buttonColour} />
          </Button>
        </ButtonsWrap>
        <CollapseButton onClick={() => onClick(new Date())}>
          <Contract color={buttonColour} />
        </CollapseButton>
      </MetaWrap>
    </ShowCardWrap>
  ) : (
    <ShowCardWrap
      onClick={() => onClick(date)}
      width={showCardWidth}
      selected={false}
      rightMargin={rightMargin}
    >
      <ShowReelImage path={photoPath} />
      <MetaWrap>
        <Title title={title} />
        <FeaturedArtists id={id} />
      </MetaWrap>
    </ShowCardWrap>
  );
};

export default ShowCard;
