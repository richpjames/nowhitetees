import React, { Component } from "react";
import styled from "styled-components/macro";
import { RouteComponentProps } from "@reach/router";

import Show from "../Models/Show";
import ShowReel from "./ShowReel/ShowReel";
import Shows from "../ShowsData";

const HomeWrap = styled.section`
  margin: 8vh 0;
  width: 82.5%;
  display: flex;
  flex-wrap: wrap;
`;

interface IProps extends RouteComponentProps {}
interface IState {
  shows: Show[];
}
class Home extends Component<IProps, IState> {
  state = { shows: [] };
  render() {
    const { shows } = this.state;
    return (
      <HomeWrap className="HomeWrap">
        <ShowReel shows={shows} className="ShowReel" />
      </HomeWrap>
    );
  }
  componentDidMount() {
    const shows = Shows.get();
    this.setState({ shows: shows });
  }
}

export default Home;
