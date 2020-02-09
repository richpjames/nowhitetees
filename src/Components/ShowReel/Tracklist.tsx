import React from "react";

interface Props {
  tracklist: [{ artist: string; track: string }];
}

const Tracklist: React.SFC<Props> = (props: Props) => {
  const { tracklist } = props;
  const fulltracklist = tracklist.map((track, i) => {
    return (
      <div key={`${track.track} ${i}`}>
        <p>{`${track.artist}`}</p>
        <p>{`${track.track}`}</p>
        <br></br>
      </div>
    );
  });

  return <section>{fulltracklist}</section>;
};

export default Tracklist;
