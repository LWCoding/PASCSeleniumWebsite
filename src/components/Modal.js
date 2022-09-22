// Images
import closeBtn from "../img/close_btn.png";
// React
import React, { Component } from 'react'
// CSS
import './Modal.css';

export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            desc: props.desc,
            enabled: props.enabled
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({enabled: newProps.enabled});
    }
    toggleModalState() {
        this.setState({enabled: false});
    }
    render() {
        return ((this.state.enabled) ?
            <div>
                <div id="modal-bg" onClick={() => { this.toggleModalState(); }} />
                <div id="modal">
                    <img src={closeBtn} alt="Close button" id="modal-close-btn" onClick={() => { this.toggleModalState(); }} />
                    <h2 id="modal-name">{this.props.name}</h2>
                    <p id="modal-description">{this.props.desc}</p>
                </div>
            </div>
        : "")
    }
}

export default Modal