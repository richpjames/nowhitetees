import React from "react";
import styled from "styled-components";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import IndividualShow from "./Components/ShowReel/LongCard/IndividualShow";
import { Router } from "@reach/router";

const AppWrap = styled.div``;

function App() {
  return (
    <AppWrap className="AppWrap">
      <NavBar />
      <Router>
        <Home path="/" />
        <IndividualShow path="shows/:date" />
      </Router>
    </AppWrap>
  );
}

export default App;
