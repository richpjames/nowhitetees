import React from "react";
import styled from "styled-components/macro";

import { navigate } from "@reach/router";
import { MailOption, Twitter, Instagram } from "grommet-icons";

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 75%;
  height: 7.5%;
`;

const NavItem = styled.li`
  margin-top: 0.5em;
`;

const LinksSection = () => {
  return (
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
  );
};

export default LinksSection;
