// REACT
import React, { Component } from 'react'
// CSS
import './Announcement.css';

export class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            desc: props.desc
        }
    }
    render() {
        return (
            <div class="announcement">
                <h3>{this.props.name}</h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Announcement