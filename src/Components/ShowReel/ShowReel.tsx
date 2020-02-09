import React from "react";
import {  navigate } from "@reach/router";
import styled from "styled-components";

import Shows from "../../Managers/Shows";
import ShowCard from "./ShowCard";

interface Props {}
const ShowReelWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;

const ShowReel: React.FC<Props> = (props: Props) => {
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
