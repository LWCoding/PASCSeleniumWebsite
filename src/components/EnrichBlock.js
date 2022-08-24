// React
import React, { Component } from 'react'
// CSS
import './EnrichBlock.css';

/* Max length of Enrichment description comment before truncation. */
const maxDescriptionLength = 200;

export class EnrichBlock extends Component {
    constructor(props) {
        super(props);
        this.description = (this.props.description.length > maxDescriptionLength) ? this.props.description.substring(0, 200) + "..." : this.props.description;
    }
    render() {
        return (
            <div>
                <div id="enrichment-block">
                    <h2 id="enrichment-title">{this.props.name} <span id="enrichment-add-info">{this.props.weekdays}</span></h2>
                    <p id="enrichment-description">{this.description}</p>
                    <p id="enrichment-about">Enrichment led by {this.props.host} in {this.props.roomName}.</p>
                </div>
            </div>
        )
    }
}

export default EnrichBlock;