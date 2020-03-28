import React from "react";
import styled from "styled-components/macro";

import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Components/Home";
import { AppContext } from "./AppContext";

const AppWrap = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const [showDate, setShowDate] = React.useState("");
  return (
    <AppWrap className="AppWrap">
      <AppContext.Provider value={{ showDate, setShowDate }}>
        <SideBar />
        <Home />
      </AppContext.Provider>
    </AppWrap>
  );
}

export default App;
