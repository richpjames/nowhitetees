import React from "react";
import styled from "styled-components/macro";
import { Heading, Text, Box } from "grommet";
import Shows from "../../../ShowsData";

const FeaturingWrap = styled(Box)`
  margin-top: 1.5vh;
`;

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
      <Heading level={4} alignSelf="center">
        Featuring:
      </Heading>
      {featuredArtists.map((artist, i) => (
        <Text key={i} size="small" alignSelf="center" margin={{ top: "0.1vh" }}>
          {artist}
        </Text>
      ))}
    </FeaturingWrap>
  );
};

export default FeaturedArtists;
