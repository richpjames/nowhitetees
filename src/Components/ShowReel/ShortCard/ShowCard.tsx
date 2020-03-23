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

const ShowCardWrap = styled.div<{ width: string }>`
  display: flex;
  border: 1px solid;
  margin-right: 35px;
  margin-bottom: 25px;
  position: relative;
  width: ${props => props.width || "450px"};
  height: 250px;
`;

interface Props {
  id: string;
  className: string;
  onClick: () => void;
  width: string;
}

const ShowCard: React.SFC<Props> = (props: Props) => {
  const { id, onClick, width } = props;
  const show: Show = Shows.getShowById(id);
  const { photoPath, title, djs } = show;
  return (
    <ShowCardWrap className="ShowCardWrap" onClick={onClick} width={width}>
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
