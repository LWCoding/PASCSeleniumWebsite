// REACT
import React, { Component } from 'react'
// COMPONENTS
import EnrichBlock from './EnrichBlock.js';

export class EnrichContainer extends Component {
    constructor(props) {
        super(props);
        this.enrichments = []
        this.enrichments.push(<EnrichBlock name="Name" description="Hello" host="Lucas" roomName="Room 112" weekdays="M W F" />);
    }
    render() {
        return (
        <div>
            {this.enrichments}
        </div>
        )
    }
}

export default EnrichContainer