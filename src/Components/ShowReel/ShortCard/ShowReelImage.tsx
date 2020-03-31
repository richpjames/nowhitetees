import React from "react";
import styled from "styled-components/macro";
import Image from "../../Image";

interface Props {
  path: string;
  className?: string;
}

const ImageWrap = styled.div`
  height: 100%;
  padding: 0;
`;

const ShowReelImage: React.FC<Props> = (props: Props) => {
  const baseImgUrl = `https://www.nowhitetees.co.uk/img/homepage_thumbs/`;

  const { path } = props;
  return (
    <ImageWrap>
      <Image src={`${baseImgUrl}${path}`} alt="show image" maxWidth="100%" />
    </ImageWrap>
  );
};

export default ShowReelImage;
