import React from "react";
import styled from "styled-components";
import { Box } from "grommet";

import Show from "../../Models/Show";
import Shows from "../../Managers/Shows";
import Title from "./Card/Title";
import ShowReelImage from "./Card/ShowReelImage";
import DJs from "./Card/DJs";
import FeaturedArtists from "./Card/FeaturedArtists";

const MetaWrap = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  min-width: 30%;
`;

const ShowCardWrap = styled.div`
  display: flex;
  border: 1px solid;
  margin-right: 35px;
  margin-bottom: 25px;
  position: relative;
  width: 450px;
  height: 250px;
`;

interface Props {
  id: string;
  className: string;
  onClick: () => Promise<void>;
}

const ShowCard: React.SFC<Props> = (props: Props) => {
  const { id, onClick } = props;
  const show: Show = Shows.getShowById(id);
  const { photoPath, title, djs } = show;
  return (
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
