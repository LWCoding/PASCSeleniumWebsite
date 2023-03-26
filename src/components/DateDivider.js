import React, { Component } from "react";
// CSS
import "./DateDivider.css";

export class DateDivider extends Component {
	render() {
		return (
			<div
				className="date-div"
				style={{
					backgroundColor: this.props.color
						? this.props.color
						: "var(--orange-alt)",
				}}
			>
				<strong>
					<h5 className="date-text my-auto">{this.props.date}</h5>
				</strong>
			</div>
		);
	}
}

export default DateDivider;
