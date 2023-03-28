// React
import React, { Component } from "react";
// Components
import EnrichBlock from "./EnrichBlock.js";
// CSS
import "./CreateEnrich.css";
// Bootstrap
import { Button, Form } from "react-bootstrap";

/*
    Placeholder template to be rendered on empty input fields.
*/
var placeholder = {
	name: "My Enrichment",
	description:
		"Tell us a little bit more about your Enrichment! Your description might include what type of activities are present, what topics will be covered, etc. Be creative!",
	host: "Me",
	roomName: "Room 000",
	weekdaySingle: "Single Day, " + getFormattedDate(Date.now()),
	weekdayRecur: "No dates chosen",
};

/*
    Formats the provided date to MM/DD/YYYY.
*/
function getFormattedDate(date) {
	let d = new Date(date);
	d.setDate(d.getDate() + 1);
	return `${d.getMonth() + 1}/${d
		.getDate()
		.toString()
		.padStart(2, "0")}/${d.getFullYear()}`;
}

/*
    Formats the provided date to YYYY-MM-DD.
*/
function getHTMLFormattedDate(date) {
	let d = new Date(date);
	d.setDate(d.getDate() + 1);
	return `${d.getFullYear()}-${(d.getMonth() + 1)
		.toString()
		.padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
}

export class CreateEnrich extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eName: "",
			eDesc: "",
			eWeekdays: "",
			eWeekdayList: [],
			eHost: "",
			eRoom: "",
			isSingleDay: true,
			singleDay: getHTMLFormattedDate(Date.now()),
		};
	}
	handleNameChange = (e) => {
		this.setState({ eName: e.target.value });
	};
	/*
        This function is run when the description text is changed.
    */
	handleDescChange = (e) => {
		this.setState({ eDesc: e.target.value });
	};
	/*
        This function is run when the room name is changed.
    */
	handleRoomChange = (e) => {
		this.setState({ eRoom: e.target.value });
	};
	/*
        This function is run when the host name is changed.
    */
	handleHostChange = (e) => {
		this.setState({ eHost: e.target.value });
	};
	/*
        This function is run when a day is added/removed for Recurring enrichments.
    */
	handleDayChange = (e) => {
		if (this.state.eWeekdayList.includes(e.target.value)) {
			let newList = this.state.eWeekdayList.filter((weekday) => {
				return weekday !== e.target.value;
			});
			this.setState({ eWeekdayList: newList }, () => {
				this.setState({
					eWeekdays: this.state.eWeekdayList
						.map((day) => {
							return day.substr(1);
						})
						.join(" "),
				});
			});
		} else {
			let newList = this.state.eWeekdayList;
			newList.push(e.target.value);
			newList.sort();
			this.setState({ eWeekdayList: newList }, () => {
				this.setState({
					eWeekdays: this.state.eWeekdayList
						.map((day) => {
							return day.substr(1);
						})
						.join(" "),
				});
			});
		}
	};
	/*
        This function is run when the date for Single Day enrichments are changed.
    */
	handleDateChange = (e) => {
		let formattedDate = getHTMLFormattedDate(e.target.value);
		if (formattedDate.substring(0, 3) === "NaN") {
			return;
		}
		this.setState({ singleDay: formattedDate });
	};
	/*
        This function is run when the One Day or Recurring checkbox is clicked.
    */
	handleTimeChoiceChange = (e) => {
		this.setState({ isSingleDay: e.target.value === "single-day" });
	};
	/*
        This function is run when the Submit Enrichment button is clicked.
    */
	handleSubmitRequest = (e) => {
		e.preventDefault();
		// Create the new Enrichment object
		let newEnrichment = {
			name: this.state.eName,
			description: this.state.eDesc,
			weekdayStr: this.state.isSingleDay
				? this.state.singleDay
				: this.state.eWeekdays,
			host: this.state.eHost,
			roomName: this.state.eRoom,
		};
		// Compile an error message if any properties are invalid
		let errorMessage = "";
		if (newEnrichment.name === "") {
			errorMessage += "Invalid name provided\n";
		}
		if (newEnrichment.description === "") {
			errorMessage += "Invalid description provided\n";
		}
		if (newEnrichment.host === "") {
			errorMessage += "Invalid host name provided\n";
		}
		if (newEnrichment.roomName === "") {
			errorMessage += "Invalid room name provided\n";
		}
		if (errorMessage !== "") {
			console.log(errorMessage);
			alert(errorMessage);
			return;
		}
		// TODO: Change localhost link!
		fetch("http://localhost:3000/create-enrichment", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: newEnrichment.name,
				description: newEnrichment.description,
				hostName: newEnrichment.host,
				roomName: newEnrichment.roomName,
				repeats: !this.state.isSingleDay,
				singleDay: new Date(
					// Code I found on SO (https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off)
					this.state.singleDay.replace(/-/g, "/").replace(/T.+/, "")
				),
				repeatDays: this.state.eWeekdays
					? this.state.eWeekdays.split(" ").map((s) => {
							return { day: s };
					  })
					: [],
			}),
		}).then((res) => {
			console.log(`Returned status ${res.status}.`);
			if (res.ok) {
				alert(
					"Successfully submitted Enrichment request! Since the website is in BETA, it has been automatically added."
				);
			} else {
				alert(
					"Something went wrong when trying to submit your Enrichment request! Try again later."
				);
			}
		});
	};
	render() {
		return (
			<div id="create-enrichment">
				<form id="create-enrichment-form">
					<h2>Create Enrichment</h2>
					<p>
						Want to create your own Enrichment? Fill in the
						following fields, and a request will be sent to await
						approval. Check your inbox for additional information
						after submitting the form.
					</p>
					<Form>
						<Form.Group className="mb-1">
							<Form.Label>Enrichment Name</Form.Label>
							<Form.Control
								type="text"
								onChange={this.handleNameChange}
								placeholder="My Enrichment"
							/>
						</Form.Group>
						<Form.Group
							className="mb-1"
							controlId="formBasicPassword"
						>
							<Form.Label>Enrichment Description</Form.Label>
							<Form.Control
								as="textarea"
								onChange={this.handleDescChange}
								rows={3}
								placeholder="Tell us a little bit more about your Enrichment! Your description might include what type of activities are present, what topics will be covered, etc. Be creative!"
							/>
						</Form.Group>
						<Form.Group className="mb-1">
							<Form.Label>Host Name</Form.Label>
							<Form.Control
								type="text"
								onChange={this.handleHostChange}
								placeholder="Me"
							/>
						</Form.Group>
						<Form.Group className="mb-1">
							<Form.Label>Room Name</Form.Label>
							<Form.Control
								type="text"
								onChange={this.handleRoomChange}
								placeholder="Room 000"
							/>
						</Form.Group>
						<p className="mb-1">This enrichment is...</p>
						<Form.Group className="mb-1">
							<Form.Check
								name="time-choice"
								type="radio"
								label="One Day"
								value="single-day"
								onChange={this.handleTimeChoiceChange}
								checked={this.state.isSingleDay}
							/>
							<Form.Check
								name="time-choice"
								type="radio"
								label="Recurring"
								value="recurring"
								onChange={this.handleTimeChoiceChange}
								checked={!this.state.isSingleDay}
							/>
						</Form.Group>
					</Form>
					<div className="mb-3" id="create-enrichment-time">
						{this.state.isSingleDay ? (
							<div id="single-day-container">
								<p className="mb-1">Active on the following day:</p>
								<input
									onChange={this.handleDateChange}
									type="date"
									value={this.state.singleDay}
								></input>
							</div>
						) : (
							<div id="weekdays-container">
								<p className="mb-1">Operates on the following weekdays:</p>
								<Form.Group className="mb-1">
									<Form.Check
										name="weekday"
										type="checkbox"
										value="0Mon"
										label="Monday"
										onChange={this.handleDayChange}
									/>
									<Form.Check
										name="weekday"
										type="checkbox"
										value="1Tue"
										label="Tuesday"
										onChange={this.handleDayChange}
									/>
									<Form.Check
										name="weekday"
										type="checkbox"
										value="2Wed"
										label="Wednesday"
										onChange={this.handleDayChange}
									/>
									<Form.Check
										name="weekday"
										type="checkbox"
										value="3Thu"
										label="Thursday"
										onChange={this.handleDayChange}
									/>
									<Form.Check
										name="weekday"
										type="checkbox"
										value="4Fri"
										label="Friday"
										onChange={this.handleDayChange}
									/>
								</Form.Group>
							</div>
						)}
					</div>
					<Button
						onClick={this.handleSubmitRequest}
						id="create-enrichment-submit"
					>
						Submit Enrichment
					</Button>
				</form>
				<div className="mt-4" id="create-enrichment-preview">
					<EnrichBlock
						name={
							this.state.eName === ""
								? placeholder.name
								: this.state.eName
						}
						description={
							this.state.eDesc === ""
								? placeholder.description
								: this.state.eDesc
						}
						weekdayStr={
							this.state.eWeekdays === "" &&
							!this.state.isSingleDay
								? placeholder.weekdayRecur
								: this.state.isSingleDay
								? "Single Day, " + this.state.singleDay
								: "Repeats every " + this.state.eWeekdays
						}
						host={
							this.state.eHost === ""
								? placeholder.host
								: this.state.eHost
						}
						roomName={
							this.state.eRoom === ""
								? placeholder.roomName
								: this.state.eRoom
						}
					/>
				</div>
			</div>
		);
	}
}

export default CreateEnrich;
