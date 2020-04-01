import React from "react";
import styled from "styled-components/macro";
import { PlayFill, Download, Expand } from "grommet-icons";

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
  transition: width 0.9s ease-out;

  ${({ rightMargin }) =>
    rightMargin &&
    `  margin-right: ${horizontalMargin}px;
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
      <ShowReelImage path={photoPath} />
      <MetaWrap>
        <Title title={title} /> <DJs djs={djs}></DJs>
        <FeaturedArtists id={id} />{" "}
        <Button>
          <PlayFill
            color={buttonColour}
            onClick={() => setSidebarShowDate(date)}
          />
        </Button>
        <Button>
          <Download color={buttonColour} />
        </Button>
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
