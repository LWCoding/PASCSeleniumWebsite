// React
import React, { useState } from "react";
// CSS
import "./EnrichBlock.css";
// Components
import Modal from './Modal.js';

/* Max length of Enrichment description comment before truncation. */
var maxDescriptionLength = 250;

function EnrichBlock(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div id="enrichment-block" onClick={() => { setIsOpen(true); }}>
        <h2 id="enrichment-title">
          {props.name} <br id="enrichment-add-info-break" />
          <span id="enrichment-add-info">{props.weekdayStr}</span>
        </h2>
        <p id="enrichment-description">{props.descOverride ? <i>{props.descOverride}</i> : props.description.length > maxDescriptionLength ? props.description.substring(0, 200).trim() + "..." : props.description}</p>
        <p id="enrichment-about">
          Enrichment led by {props.host} in {props.roomName}.
        </p>
      </div>
      {isOpen && <Modal name={props.name} desc={props.description} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default EnrichBlock;
