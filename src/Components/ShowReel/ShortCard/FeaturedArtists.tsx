import React from "react";
import styled from "styled-components/macro";
import { Text, Box } from "grommet";
import Shows from "../../../ShowsData";

const FeaturingWrap = styled(Box)`
  margin-top: 1.5vh;
  text-align: center;
`;
const Heading = styled.h4``;
const Artists = styled.ul`
  padding-top: 5%;
`;
const Artist = styled.li``;

interface Props {
  id: string;
}

const FeaturedArtists: React.FC<Props> = (props: Props) => {
  const { id } = props;
  const show = Shows.getShowById(id);
  show.setNFeaturedArtists(3);
  let featuredArtists: (string | undefined)[] = Array.from(
    show.featuredArtists
  );

  return (
    <FeaturingWrap>
      <Heading>Featuring:</Heading>
      <Artists>
        {featuredArtists.map((artist, i) => (
          <Artist key={i}>
            <p>{artist}</p>
          </Artist>
        ))}
      </Artists>
    </FeaturingWrap>
  );
};

export default FeaturedArtists;
