import React, { Component } from 'react'
// CSS
import './HeaderBlock.css';

export class HeaderBlock extends Component {
    render() {
        return (
            <div id="header-div">
                <h3>{this.props.text}</h3>
            </div>
        )
    }
}

export default HeaderBlock