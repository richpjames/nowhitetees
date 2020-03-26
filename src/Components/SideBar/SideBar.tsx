import React from "react";
import styled from "styled-components/macro";

import LogoCentered from "../LogoCentered";
import LinksSection from "./LinksSection";
import ShowSection from "./ShowSection/ShowSection";

const Nav = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 500px) {
    margin-top: 5vh;
  }
`;

interface IProps {}

const SideBar: React.FC<IProps> = (props: IProps) => {
  return (
    <Nav>
      <LogoCentered height="150px" width="150px" className="Logo" />
      <LinksSection />
      <ShowSection />
    </Nav>
  );
};

export default SideBar;
