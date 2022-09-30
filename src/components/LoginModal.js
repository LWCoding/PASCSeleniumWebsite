// REACT
import React, { Component } from 'react'
// CSS
import "./LoginModal.css";
// COMPONENTS
import Authenticator from "../components/Authenticator.js";

export class LoginModal extends Component {
    render() {
        return (
            <div>
                <div id="login-modal-bg"></div>
                <div id="login-modal">
                    <div id="not-logged-in">
                        <h2>You're Not Logged In!</h2>
                        <p>In order to use Selenium, please log into your school-provided CPS email:</p>
                        <Authenticator />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModal