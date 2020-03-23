import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Image as GrommetImage } from "grommet";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import defaultFallbackPath from "../../assets/DefaultFallbackPath";
import { ifNullSetValue } from "../../Utils/ifNullSetValue";

const imageMachine = Machine({
  id: "image",
  initial: "pending",
  states: {
    pending: { on: { SUCCESS: "loaded", FAILED: "showFallback" } },
    loaded: { on: { ERROR: "showFallback" } },
    showFallback: { type: "final" }
  }
});

interface ImageWrapProps {
  minHeight?: string;
  minWidth?: string;
  height?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
}

interface ImageProps extends ImageWrapProps {
  src: string;
  alt: string;
  fallback: object;
}

const ImageWrap = styled(GrommetImage)<ImageWrapProps>`
  height: ${props => props.height || null};
  min-height: ${props => props.minHeight || null};
  width: ${props => props.width || null};
  max-width: ${props => props.maxWidth || null};
  max-height: ${props => props.maxHeight || null};

  border-radius: ${props => props.borderRadius || null};
`;
const Wrapper = styled.div`
  position: relative;
`;

interface Props {
  src: string;
  alt: string;
  fallback?: any;
  minHeight?: string;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  children?: object;
}

export const Image: React.FC<Props> = ({
  width,
  height,
  src,
  children,
  alt,
  borderRadius,
  fallback,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth
}) => {
  const [current, send] = useMachine(imageMachine);

  useEffect(() => {
    console.log(current.value);
    send("SUCCESS");
  }, [send, current.value]);

  const onError = (src: string) => {
    console.log(`error loading image ${src}`);
    send("ERROR");
  };

  width = ifNullSetValue(width, "auto");
  height = ifNullSetValue(height, "auto");

  return current.matches("loaded") ? (
    <Wrapper>
      {children}
      <ImageWrap
        src={src}
        alt={alt}
        onError={() => onError(src)}
        height={height}
        minHeight={minHeight}
        maxHeight={maxHeight}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        borderRadius={borderRadius}
        className="ImageWrap"
      />
    </Wrapper>
  ) : (
    <Wrapper>
      {children}
      <ImageWrap src={fallback ? fallback : defaultFallbackPath} />
    </Wrapper>
  );
};

export default Image;
