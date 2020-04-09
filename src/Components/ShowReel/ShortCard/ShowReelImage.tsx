import React from "react";
import styled from "styled-components/macro";
import Image from "../../Image";

interface Props {
  path: string;
  className?: string;
  onClick?: () => void;
}

const ImageWrap = styled.div`
  height: 100%;
  padding: 0;
`;
const baseImgUrl = `http://files.nowhitetees.co.uk/homepage-thumbs/`;

const ShowReelImage: React.FC<Props> = (props: Props) => {
  const { path, onClick } = props;
  return (
    <ImageWrap onClick={onClick}>
      <Image
        src={`${baseImgUrl}${path}`}
        alt="show image"
        maxWidth="100%"
        height="100%"
      />
    </ImageWrap>
  );
};

export default ShowReelImage;
