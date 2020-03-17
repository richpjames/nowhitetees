import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";

import Show from "../../Models/Show";
import Shows from "../../ShowsData";
import ShowCard from "./ShowCard";

const ShowReelWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;
interface IProps {
  shows: Show[];
  className: string;
}

const ShowReel: React.FC<IProps> = (props: IProps) => {
  const showReel = Shows.get().map((show, i) => {
    const { date, id } = show;

    return (
      <ShowCard
        onClick={() => navigate(`shows/${date}`)}
        className="ShowCard"
        id={id}
        key={id}
      />
    );
  });
  return <ShowReelWrap>{showReel}</ShowReelWrap>;
};

export default ShowReel;
