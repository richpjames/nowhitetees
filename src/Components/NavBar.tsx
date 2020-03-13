import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import LogoCentered from "./LogoCentered";

const Nav = styled.nav`
  display: flex;
  width: 90vw;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  @media only screen and (max-width: 500px) {
    margin-top: 5vh;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  text-align: right;
  padding-top: 2px;
  margin-right: 1.73vw;
  height: 100px;
  margin-top: 50px;
`;
const NavItem = styled.li`
  margin-top: 0.5em;
`;

interface IProps {}

const NavBar: React.FC<IProps> = (props: IProps) => {
  return (
    <Nav className="Nav">
      <LogoCentered height="150px" width="150px" className="Logo" />
      <NavLinks className="NavLinks">
        <NavItem className="NavItem">
          <a href="mailto:rj@richjames.co.uk">Contact</a>
        </NavItem>
        <NavItem className="NavItem">
          <Link to="about">Shows</Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
