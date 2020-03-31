import React from "react";
import styled from "styled-components/macro";

import LogoCentered from "../LogoCentered";
import LinksSection from "./LinksSection";
import ShowSection from "./ShowSection/ShowSection";
import { AppContext } from "../../AppContext";

const Nav = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  @media only screen and (max-width: 500px) {
    margin-top: 5vh;
  }
`;

const LogoWrap = styled.div`
  height: 22.5%;
`;
const Blanker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

interface IProps {}

const SideBar: React.FC<IProps> = (props: IProps) => {
  const { showDate } = React.useContext(AppContext);
  return (
    <Nav>
      <LogoWrap>
        <LogoCentered height="150px" width="150px" className="Logo" />
      </LogoWrap>
      <LinksSection />
      {showDate ? (
        <ShowSection />
      ) : (
        <Blanker>
          <h5>Select a show...</h5>
        </Blanker>
      )}
    </Nav>
  );
};

export default SideBar;
