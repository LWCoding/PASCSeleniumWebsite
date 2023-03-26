// REACT
import React, { Component } from "react";
// COMPONENTS
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import LoginModal from "../components/authentication/LoginModal.js";
import { Link } from "react-router-dom";
// IMAGES
import CalendarImg from "../img/schedule.png";
import AvatarImg from "../img/user.png";
import MagnifyingImg from "../img/search.png";
// REACT BOOTSTRAP
import { Alert, Button, Card, CardGroup } from "react-bootstrap";

export class Homepage extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: true,
		};
	}
	// Try to see if the user has login credentials, and
	// log them in if so.
	componentDidMount() {
		fetch("http://localhost:3000/retrieve", {
			method: "POST",
			credentials: "include",
		})
			.then((res) => {
				this.setState({ loggedIn: res.ok });
				return res.json();
			})
			.then((json) => {
				console.log(json);
			});
	}
	render() {
		return (
			<div>
				<Header />
				<div className="mx-auto" style={{ maxWidth: "1300px" }}>
					<Alert className="mx-4 my-2" variant="warning">
						This webpage is under development. Please refrain from
						registering Enrichments until further notice.
					</Alert>
					<div className="px-4 py-2">
						{this.state.loggedIn ? (
							<div>
								<CardGroup>
									<Card>
										<Card.Img
											className="mx-auto my-3"
											style={{ maxWidth: "80%" }}
											variant="top"
											src={CalendarImg}
										/>
										<Card.Body>
											<Card.Title>My Schedule</Card.Title>
											<Card.Text>
												View and change your scheduled
												Enrichments for the next few
												days.
											</Card.Text>
											<Link
												to="/schedule"
												style={{
													textDecoration: "none",
												}}
											>
												<Button variant="primary">
													View Enrichments
												</Button>
											</Link>
										</Card.Body>
									</Card>
									<Card>
										<Card.Img
											className="mx-auto my-3"
											style={{ maxWidth: "80%" }}
											variant="top"
											src={AvatarImg}
										/>
										<Card.Body>
											<Card.Title>My Info</Card.Title>
											<Card.Text>
												Locate your ID, change your
												nickname, or find other stored
												personal information.
											</Card.Text>
											<Link
												to="/student-info"
												style={{
													textDecoration: "none",
												}}
											>
												<Button variant="primary">
													View Info
												</Button>
											</Link>
										</Card.Body>
									</Card>
									<Card>
										<Card.Img
											className="mx-auto my-3"
											style={{ maxWidth: "80%" }}
											variant="top"
											src={MagnifyingImg}
										/>
										<Card.Body>
											<Card.Title>
												Teacher Locator
											</Card.Title>
											<Card.Text>
												Find what room a teacher will be
												in on a specific day.
											</Card.Text>
											<Link
												to="/schedule"
												style={{
													textDecoration: "none",
												}}
											>
												<Button variant="primary">
													Find Teacher
												</Button>
											</Link>
										</Card.Body>
									</Card>
								</CardGroup>
							</div>
						) : (
							<LoginModal />
						)}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Homepage;
