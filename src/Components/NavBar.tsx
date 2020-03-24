import React from "react";
import styled from "styled-components/macro";
import { navigate } from "@reach/router";

import LogoCentered from "./LogoCentered";
import { MailOption, Twitter, Instagram } from "grommet-icons";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17.5%;
  height: 100vh;
  border-bottom: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  @media only screen and (max-width: 500px) {
    margin-top: 5vh;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 75%;
`;

const NavItem = styled.li`
  margin-top: 0.5em;
`;

interface IProps {}

const SideBar: React.FC<IProps> = (props: IProps) => {
  return (
    <Nav>
      <LogoCentered height="150px" width="150px" className="Logo" />
      <NavLinks>
        <NavItem onClick={() => navigate("mailto:rj@richjames.co.uk")}>
          <MailOption color="black" />
        </NavItem>
        <NavItem onClick={() => navigate("https://twitter.com/nowhitetee")}>
          <Twitter color="black" />
        </NavItem>
        <NavItem onClick={() => navigate("https://instagram.com/nowhitetees")}>
          <Instagram color="black" />
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default SideBar;
