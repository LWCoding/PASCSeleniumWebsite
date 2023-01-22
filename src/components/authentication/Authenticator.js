// REACT
import React, { Component } from "react";
import LoginAuth from "./LoginAuth.js";
import RegisterAuth from "./RegisterAuth.js";
// CSS
import "./Authenticator.css";

export class Authenticator extends Component {
	constructor() {
		super();
		this.state = {
			selected: "login", // Can be "register", "login", or "n/a"
		};
	}
	handleShowRegisterBtnClick = () => {
		this.setState({ selected: "register" });
	};
	handleShowLoginBtnClick = () => {
		this.setState({ selected: "login" });
	};
	render() {
		return (
			<div className="auth-box">
				{this.state.selected === "register" && (
					<div>
						<RegisterAuth />
						<button
							className="switch-form-type"
							onClick={this.handleShowLoginBtnClick}
						>
							Already signed up? Log in!
						</button>
					</div>
				)}
				{this.state.selected === "login" && (
					<div>
						<LoginAuth />
						<button
							className="switch-form-type"
							onClick={this.handleShowRegisterBtnClick}
						>
							No account? Register!
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default Authenticator;
