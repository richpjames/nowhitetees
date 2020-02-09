import React from "react";

function Date(props: { date: string }) {
  const { date } = props;
  return <p> {date}</p>;
}

export default Date;
