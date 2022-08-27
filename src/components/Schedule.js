// REACT
import React, { Component } from 'react';
// Components
import EnrichBlock from './EnrichBlock.js';
// CSS
import './Schedule.css';

export class Schedule extends Component {
  render() {
    return (
      <EnrichBlock
          name="Hello"
          description="Desc"
          weekdays="Days"
          host="Host"
          roomName="A room"
      />
    )
  }
}

export default Schedule