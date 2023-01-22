// REACT
import React, { Component } from "react";
// CSS
import "./Authenticator.css";

export default class RegisterAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			reenter: "",
		};
	}

	handleInputChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:3000/register", {
			method: "POST",
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
				reenter: this.state.reenter,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				console.log(json);
			});
	};

	render() {
		return (
			<form id="login-auth" onSubmit={this.handleSubmit}>
				<input
					name="username"
					type="text"
					placeholder="Username"
					value={this.state.username}
					onChange={this.handleInputChange}
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.handleInputChange}
				/>
				<input
					name="reenter"
					type="password"
					placeholder="Reenter Password"
					value={this.state.reenter}
					onChange={this.handleInputChange}
				/>
				<button type="submit">Register</button>
			</form>
		);
	}
}