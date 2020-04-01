import React from "react";
import styled from "styled-components/macro";
import { isSameDay } from "date-fns";

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
  const [expandedShow, setExpandedShow] = React.useState<Date>(new Date());

  let evenSelected = false;
  const isInLeftColumn = (i: number) =>
    evenSelected ? i % 2 === 1 : i % 2 === 0;

  const showReel = Shows.get().map((show, i) => {
    const { date, id } = show;
    const selected = isSameDay(expandedShow, date);

    if (selected) {
      evenSelected = i % 2 === 0 ? true : false;
    }
    return (
      <ShowCard
        onClick={setExpandedShow}
        className="ShowCard"
        date={date}
        id={id}
        key={id}
        selected={selected}
        rightMargin={isInLeftColumn(i)}
      />
    );
  });

  return <ShowReelWrap>{showReel}</ShowReelWrap>;
};

export default ShowReel;
