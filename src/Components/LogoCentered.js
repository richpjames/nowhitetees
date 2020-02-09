import React from "react";
import styled from "styled-components";
import logo from "../assets/text_large.svg";

const LogoWrap = styled.div`
  animation: blinker 0.5s ease-in 1s infinite reverse both running;
  margin-right: auto;
  margin-left: 50px;
  @keyframes blinker {
  }
`;

const LogoSVG = styled.img`
  top: 50%;
  left: 49%;
  transform: translate(-50%);
  height: ${props => props.height || null};
  width: ${props => props.width || null};
  stroke-width: 100;
`;

const LogoCentered = (props) => {
  const {height, width} = props;
  return (
    <LogoWrap className="LogoWrap" >
      <LogoSVG className="LogoSVG" src={logo} alt="logo" height={height} width={width} />
    </LogoWrap>
  );
};

export default LogoCentered;
