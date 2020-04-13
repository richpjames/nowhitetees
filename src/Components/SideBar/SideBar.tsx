import React from "react";
import styled from "styled-components/macro";

import LogoCentered from "../LogoCentered";
import ShowSection from "./ShowSection/ShowSection";
import LinksSection from "./LinksSection";
import { AppContext } from "../../AppContext";

const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100%;
  @media only screen and (max-width: 500px) {
    margin-top: 5vh;
  }
`;

const LogoWrap = styled.div`
  height: 30%;
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
  const { sidebarShowDate: showDate } = React.useContext(AppContext);
  return (
    <SidebarContainer>
      <LogoWrap>
        <LogoCentered height="100%" width="100%" className="Logo" />
      </LogoWrap>
      <LinksSection />
      {showDate ? (
        <ShowSection />
      ) : (
        <Blanker>
          <h5>Select a show...</h5>
        </Blanker>
      )}
    </SidebarContainer>
  );
};

export default SideBar;
