// REACT
import React, { Component } from 'react';
// Components
import EnrichBlock from './EnrichBlock.js';
import DateDivider from './DateDivider.js';
import HeaderBlock from './HeaderBlock.js';
// CSS
import './Schedule.css';

/*
    Formats the provided date to MM/DD/YYYY (DAY).
*/
function getFormattedDate(date) {
  const weekdays = ["Weekend", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Weekend"]
  let d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDate().toString()}/${d.getFullYear()} (${weekdays[d.getDay()]})`
}

export class Schedule extends Component {
  constructor() {
    super();
    this.enrichments = []; // Stores HTML enrichments.
    // Run seven days worth of enrichments.
    // This loop should check if the user is currently signed 
    // up for an enrichment on the day that is being checked.
    for (var i = 0; i < 7; i++) {
      var currDate = new Date(Date.now()); // Point of ref.
      currDate.setDate(currDate.getDate() + i);
      // Check if the day is a weekend.
      // If so, render special HTML.
      var isWeekend = (currDate.getDay() === 0 || currDate.getDay() === 6);
      // TODO: Make this find the enrichment
      // the user is currently signed up to.
      var e = {
        name: "Minecraft Club",
        description:
          "Want to destress from homework, or just have some fun playing with friends? Minecraft Club is a community for everybody to relax and hang out in.\n\nBoth Java Edition and Bedrock Edition Minecraft players are of course welcome to join.",
        host: "Chris Deng",
        roomName: "Room 305",
        weekdayStr: "Repeats every Fri"
      }
      // Push either the selected enrichment OR an
      // empty template enrichment.
      this.enrichments.push(
        (!isWeekend) ? 
        <div>
          <DateDivider date={getFormattedDate(currDate)} />
          <EnrichBlock
            key={i}
            name={e.name}
            description={e.description}
            descOverride="Click to view enrichment information."
            weekdayStr={e.weekdayStr}
            host={e.host}
            roomName={e.roomName}
          />
        </div> :
        <DateDivider date={getFormattedDate(currDate)} color="var(--blue-alt)" />
      );
    }
  }
  render() {
    return (
      <div id="schedule-block">
        <HeaderBlock text="My Schedule" />
        <div className="spacer-md" />
        {this.enrichments}
      </div>
    )
  }
}

export default Schedule