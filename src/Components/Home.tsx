import React, { Component } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";

import Show from "../Models/Show";
import ShowReel from "./ShowReel/ShowReel";
import Shows from "../Managers/Shows";

const HomeWrap = styled.section`
  width: 90%;
  margin: 8vh auto;
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