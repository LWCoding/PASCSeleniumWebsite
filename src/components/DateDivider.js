import React, { Component } from "react";
// CSS
import "./DateDivider.css";

export class DateDivider extends Component {
    render() {
        return (
            <div
                id="date-div"
                style={{
                    backgroundColor: this.props.color
                        ? this.props.color
                        : "var(--orange-alt)",
                }}
            >
                <h3>{this.props.date}</h3>
            </div>
        );
    }
}

export default DateDivider;
