import React from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import NotFound from "./NotFound";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import IndividualShow from "./Components/ShowReel/LongCard/IndividualShow";

const AppWrap = styled.div``;

function App() {
  return (
    <AppWrap className="AppWrap">
      <NavBar />
      <Router>
        <Home path="/" />
        <IndividualShow path="/:date" />
        <NotFound default />
      </Router>
    </AppWrap>
  );
}

export default App;
