// CSS
import './ContentBlock.css';
// REACT
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ContentBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            subname: props.subname,
            desc: props.desc,
            image: props.image,
            linkTo: props.linkTo
        }
    }    
    render() {
        return (
            <Link to={this.props.linkTo} style={{ textDecoration: "none" }}>
                <div id="content-block">
                    <div id="info">
                        <h2 id="content-name">{this.props.name}</h2>
                        <h3 id="content-subname">{this.props.subname}</h3>
                        <p id="content-desc">{this.props.desc}</p>
                    </div>
                    <img src={this.props.image} alt="Content block" />
                </div>
            </Link>
        )
    }
}

export default ContentBlock