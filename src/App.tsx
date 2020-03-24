import React from "react";
import styled from "styled-components/macro";

import "./App.css";
import SideBar from "./Components/NavBar";
import Home from "./Components/Home";

const AppWrap = styled.div`
  display: flex;
`;

function App() {
  return (
    <AppWrap className="AppWrap">
      <SideBar />
      <Home path="/" />
    </AppWrap>
  );
}

export default App;
