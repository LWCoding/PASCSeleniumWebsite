// React
import React, { Component } from "react";
// CSS
import "./EnrichBlock.css";

/* Max length of Enrichment description comment before truncation. */
var maxDescriptionLength = 250;

export class EnrichBlock extends Component {
  render() {
    return (
      <div>
        <div id="enrichment-block">
          <h2 id="enrichment-title">
            {this.props.name} <br id="enrichment-add-info-break" />
            <span id="enrichment-add-info">{this.props.weekdayStr}</span>
          </h2>
          <p id="enrichment-description">{this.props.description.length > maxDescriptionLength ? this.props.description.substring(0, 200).trim() + "..." : this.props.description}</p>
          <p id="enrichment-about">
            Enrichment led by {this.props.host} in {this.props.roomName}.
          </p>
        </div>
      </div>
    );
  }
}

export default EnrichBlock;
