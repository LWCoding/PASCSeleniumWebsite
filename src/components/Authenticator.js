// REACT
import React, { Component } from 'react'
import LoginAuth from '../components/LoginAuth.js';
import RegisterAuth from '../components/RegisterAuth.js';
// CSS
import "./Authenticator.css";

export class Authenticator extends Component {
    constructor() {
        super();
        this.state = {
            selected: "login" // Can be "register", "login", or "n/a"
        }
    }
    handleRegisterBtnClick() {
        this.setState({ selected: "register" });
    }
    handleLoginBtnClick() {
        this.setState({ selected: "login" });
    }
    render() {
        return (
            <div className="auth-box">
                {this.state.selected === "register" && <RegisterAuth />}
                {this.state.selected === "login" && <LoginAuth /> }
                <br />
                <button onClick={this.handleRegisterBtnClick}>Register</button>
                <button onClick={this.handleLoginBtnClick}>Login</button>
            </div>
        )
    }
}

export default Authenticator