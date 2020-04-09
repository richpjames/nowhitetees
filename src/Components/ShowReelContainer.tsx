import React from "react";
import styled from "styled-components/macro";

import Show from "../Models/Show";
import ShowReel from "./ShowReel/ShowReel";
import Shows from "../ShowsData";

const HomeWrap = styled.section`
  margin-left: 2.5%;
  margin-top: 2.5%;
  max-height: 100vh;
  overflow-y: scroll;
  width: 82.5%;
  display: flex;
  flex-wrap: wrap;
`;

export const ShowReelContainer = () => {
  const [shows, setShows] = React.useState<Show[]>([]);

  React.useEffect(() => {
    setShows(() => Shows.get());
  }, []);

  return (
    <HomeWrap className="HomeWrap">
      <ShowReel shows={shows} className="ShowReel" />
    </HomeWrap>
  );
};

export default ShowReelContainer;
