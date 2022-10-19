// REACT
import React, { Component } from 'react';
// Components
import EnrichBlock from './EnrichBlock.js';
import DateDivider from './DateDivider.js';
import HeaderBlock from './HeaderBlock.js';
// CSS
import './Schedule.css';

// Number of enrichments to show.
const numEnrichments = 7;

/*
    Formats the provided date to MM/DD/YYYY (DAY).
*/
function getFormattedDate(date) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
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
    for (var i = 0; i < numEnrichments; i++) {
      var currDate = new Date(Date.now()); // Point of ref.
      currDate.setDate(currDate.getDate() + i);
      // Check if the day is a weekend.
      // If so, render special HTML.
      var isWeekend = (currDate.getDay() === 0 || currDate.getDay() === 6);
      // TODO: Make this find the enrichment
      // the user is currently signed up to.
      var e = {
        name: "NO CLUB SELECTED",
        description:
          "Please select a club for this day.",
        host: "Admin",
        roomName: "Main Office",
        weekdayStr: "Mon Tue Wed Thu Fri"
      }
      // Push either the selected enrichment OR an
      // empty template enrichment.
      // TODO: Make all keys unique!!!
      this.enrichments.push(
        (!isWeekend) ? 
        <div>
          <DateDivider key={i} date={getFormattedDate(currDate)} />
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
        <DateDivider key={i} date={getFormattedDate(currDate)} color="var(--orange)" />
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