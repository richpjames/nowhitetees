import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Image from "../../Common/Image";

interface Props {
  path: string;
  className: string;
}

const ImageWrap: AnyStyledComponent = styled(Image)`
  height: 175px;
  flex: 7;
  padding: 0;
  margin: auto;
  height: auto;
`;

const ShowReelImage: React.FC<Props> = (props: Props) => {
  const baseImgUrl = `https://www.nowhitetees.co.uk/img/homepage_thumbs/`;

  const { path } = props;
  return (
    <ImageWrap>
      <Image
        src={`${baseImgUrl}${path}`}
        alt="show image"
        maxWidth="100%"
        height="175px"
        maxHeight="175px"
      />
    </ImageWrap>
  );
};

export default ShowReelImage;
