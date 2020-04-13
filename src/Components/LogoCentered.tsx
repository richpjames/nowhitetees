import React from "react";
import styled from "styled-components/macro";
import logo from "../assets/text_logo.svg";

const LogoSVG = styled.img<{ height: string; width: string }>`
  height: ${props => props.height || null};
  width: ${props => props.width || null};
`;

interface IProps {
  height: string;
  width: string;
  className: string;
}

const LogoCentered: React.FC<IProps> = props => {
  const { height, width } = props;
  return (
    <LogoSVG
      className="LogoSVG"
      src={logo}
      alt="logo"
      height={height}
      width={width}
    />
  );
};

export default LogoCentered;
