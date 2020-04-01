import React from "react";
import styled from "styled-components/macro";

import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import ShowReelContainer from "./Components/ShowReelContainer";
import { AppContext } from "./AppContext";

const AppWrap = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const [sidebarShowDate, setSidebarShowDate] = React.useState(new Date());
  return (
    <AppWrap className="AppWrap">
      <AppContext.Provider
        value={{
          sidebarShowDate: sidebarShowDate,
          setSidebarShowDate: setSidebarShowDate
        }}
      >
        <SideBar />
        <ShowReelContainer />
      </AppContext.Provider>
    </AppWrap>
  );
}

export default App;
