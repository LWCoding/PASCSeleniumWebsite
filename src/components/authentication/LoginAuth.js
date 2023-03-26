// REACT
import React, { Component } from "react";
// CSS
import "./Authenticator.css";

export default class LoginAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
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
		fetch("http://localhost:3000/login", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.status === 200) {
					window.location.reload();
				}
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
				<button type="submit">Login</button>
			</form>
		);
	}
}
