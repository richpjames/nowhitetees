import React from "react";
import styled from "styled-components/macro";

import "./App.css";
import { AppContext } from "./AppContext";
import ShowReelContainer from "./Components/ShowReelContainer";
import Shows from "./ShowsData";
import SideBar from "./Components/SideBar/SideBar";

const AppWrap = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const [sidebarShowDate, setSidebarShowDate] = React.useState(new Date());
  Shows.get();

  React.useEffect(() => setSidebarShowDate(Shows.getMostRecentShowDate()), []);

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
