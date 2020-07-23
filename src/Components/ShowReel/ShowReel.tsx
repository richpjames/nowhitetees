import React from "react";
import styled from "styled-components/macro";
import { isSameDay, differenceInCalendarYears, getYear } from "date-fns";

import Show from "../../Models/Show";
import Shows from "../../ShowsData";
import ShowCard from "./ShortCard/ShowCard";

const ShowReelWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

const YearTitle = styled.h2`
  width: 100%;
  margin-bottom: 25px;
`;

interface IProps {
  shows: Show[];
  className: string;
}

const shows = Shows.get();
let evenSelected = false;

const isInLeftColumn = (i: number, date: Date, prevShowDate: Date) => {
  return !differenceInCalendarYears(prevShowDate, date) || evenSelected
    ? i % 2 === 1
    : i % 2 === 0;
};

const ShowReel: React.FC<IProps> = (props: IProps) => {
  const [expandedShow, setExpandedShow] = React.useState<Date>(new Date());

  const showReel = shows.map((show, i) => {
    const { date, id } = show;
    const selected = isSameDay(expandedShow, date);

    if (selected) {
      evenSelected = i % 2 === 0 ? true : false;
    }
    return (
      <React.Fragment key={i}>
        {i === 0 && <YearTitle>{getYear(Date.now())}</YearTitle>}
        <ShowCard
          onClick={setExpandedShow}
          className="ShowCard"
          date={date}
          id={id}
          key={id}
          selected={selected}
          rightMargin={isInLeftColumn(
            i,
            date,
            shows[i + 1] && shows[i + 1].date
          )}
        />
        {shows[i + 1] &&
          differenceInCalendarYears(shows[i + 1].date, date) === -1 && (
            <YearTitle>20{getYear(shows[i + 1].date)}</YearTitle>
          )}
      </React.Fragment>
    );
  });

  return <ShowReelWrap>{showReel}</ShowReelWrap>;
};

export default ShowReel;
