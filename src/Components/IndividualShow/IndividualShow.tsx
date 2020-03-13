import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";

import Title from "./Title";
import Date from "./Date";
import Description from "./Description";
import Tracklist from "./Tracklist";
import Photo from "./Photo";
import Shows from "../../Managers/Shows";
import Show from "../../Models/Show";

const ShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props extends RouteComponentProps<{ date: string }> {}

const IndividualShow: React.FC<Props> = (props: Props) => {
  const { date } = props;
  const show: Show = Shows.getShowByDate(date);
  return (
    <ShowWrapper>
      <Title title={show.title} />
      <Date date={show.date} />
      <Photo src={show.photoPath} />
      <Description description={show.description} />
      <Tracklist tracklist={show.tracklist} />
    </ShowWrapper>
  );
};

export default IndividualShow;
