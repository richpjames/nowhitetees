import React from "react";

interface Props {
  date: string
}

const Date: React.FC<Props> = (props: Props) => {
  const { date } = props;
  return <h2>{date}</h2>;
}

export default Date;
