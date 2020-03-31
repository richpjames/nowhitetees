import React, { useContext } from "react";
import styled from "styled-components/macro";
import { isSameDay } from "date-fns";

import { AppContext } from "../../AppContext";
import Show from "../../Models/Show";
import Shows from "../../ShowsData";
import ShowCard from "./ShortCard/ShowCard";

const ShowReelWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;
interface IProps {
  shows: Show[];
  className: string;
}

const ShowReel: React.FC<IProps> = (props: IProps) => {
  const { showDate, setShowDate } = useContext(AppContext);

  let evenSelected = false;

  const showReel = Shows.get().map((show, i) => {
    const { date, id } = show;
    console.log(date);
    const selected = isSameDay(showDate, date);
    if (selected) {
      evenSelected = i % 2 === 0 ? true : false;
    }
    return (
      <ShowCard
        onClick={setShowDate}
        className="ShowCard"
        date={date}
        id={id}
        key={id}
        selected={selected}
        rightMargin={evenSelected ? i % 2 === 1 : i % 2 === 0}
      />
    );
  });

  return <ShowReelWrap>{showReel}</ShowReelWrap>;
};

export default ShowReel;
