import React, { useState } from 'react';
import PlayerData from './PlayerData/PlayerData';
import ToggleDM from './ToggleDM';
import './players.css';
import axios from 'axios';

// Class component that fetches data from the server you now have running - the
export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  // Fetch data from `http://localhost:5000/api/players`
  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then((res) => {
      console.log(res.data);
      //   const data = res.data;
      //   console.log(data);
      this.setState({
        data: res.data,
      });
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <div className='header-wrap'>
          <h1>Players</h1>
          <ToggleDM />
        </div>
        <div className='players-wrap'>
          <PlayerData state={this.state} />
        </div>
      </>
    );
  }
}
