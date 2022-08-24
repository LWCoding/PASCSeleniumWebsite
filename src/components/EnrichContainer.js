// REACT
import React, { Component } from "react";
// COMPONENTS
import EnrichBlock from "./EnrichBlock.js";
// CSS
import "./EnrichContainer.css";

export class EnrichContainer extends Component {
  constructor(props) {
    super(props);
    this.enrichments = [];
    this.enrichments = this.props.enrichments.map((e) => {
      return (
        <EnrichBlock
          name={e.name}
          description={e.description}
          weekdays={e.weekdays}
          host={e.host}
          roomName={e.roomName}
        />
      );
    });
  }
  render() {
    return <div id="enrichment-container">{this.enrichments}</div>;
  }
}

export default EnrichContainer;
