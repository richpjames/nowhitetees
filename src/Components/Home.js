import React, { Component } from 'react';
import styled from 'styled-components';

// import { getAllShows } from '../api';
import ShowReel from './ShowReel/ShowReel';

const HomeWrap = styled.section`
  width: 90%;
  margin: 8vh auto;
  display: flex;
  flex-wrap: wrap;
`;

class Home extends Component {
  state = { shows: [] };
  render() {
    const { shows } = this.state;
    return (
      <HomeWrap className="HomeWrap">
        <ShowReel shows={shows} className="ShowReel" />
      </HomeWrap>
    );
  }
  // componentDidMount() {
  //   getAllShows().then(res => this.setState({ shows: res }));
  // }
}

export default Home;
