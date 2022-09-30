// React
import React, { Component } from "react";
// CSS
import "./EnrichBlock.css";
// Components
import Modal from './Modal.js';

/* Max length of Enrichment description comment before truncation. */
var maxDescriptionLength = 250;

export class EnrichBlock extends Component {
  constructor() {
    super()
    this.state = {
      modalEnabled: false
    };
  }
  toggleModalState() {
    this.setState({modalEnabled: !this.state.modalEnabled});
  }
  render() {
    return (
      <div>
        <div id="enrichment-block" onClick={() => { this.toggleModalState(); }}>
          <h2 id="enrichment-title">
            {this.props.name} <br id="enrichment-add-info-break" />
            <span id="enrichment-add-info">{this.props.weekdayStr}</span>
          </h2>
          <p id="enrichment-description">{this.props.descOverride ? <i>{this.props.descOverride}</i> : this.props.description.length > maxDescriptionLength ? this.props.description.substring(0, 200).trim() + "..." : this.props.description}</p>
          <p id="enrichment-about">
            Enrichment led by {this.props.host} in {this.props.roomName}.
          </p>
        </div>
        <Modal name={this.props.name} desc={this.props.description} enabled={this.state.modalEnabled} />
      </div>
    );
  }
}

export default EnrichBlock;
