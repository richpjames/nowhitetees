import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import defaultFallbackPath from "../assets/DefaultFallbackPath";
import { ifNullSetValue } from "../Utils/ifNullSetValue";

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
  height: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
}

const ImageWrap = styled.img<ImageWrapProps>`
  height: ${props => props.height || null};
  min-height: ${props => props.minHeight || null};
  width: ${props => props.width || null};
  max-width: ${props => props.maxWidth || null};
  max-height: ${props => props.maxHeight || null};
  border-radius: ${props => props.borderRadius || null};
  object-fit: cover;
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
  height: string;
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
    send("SUCCESS");
  }, [send, current.value]);

  const onError = (src: string) => {
    send("ERROR");
  };

  width = ifNullSetValue(width, "auto");

  return current.matches("loaded") ? (
    <ImageWrap
      alt={alt}
      borderRadius={borderRadius}
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      minHeight={minHeight}
      minWidth={minWidth}
      onError={() => onError(src)}
      src={src}
      width={width}
    />
  ) : (
    <Wrapper>
      <ImageWrap
        src={fallback ? fallback : defaultFallbackPath}
        height="200px"
      />
    </Wrapper>
  );
};

export default Image;
