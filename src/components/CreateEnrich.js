// React
import React, { Component } from 'react'
// Components
import EnrichBlock from './EnrichBlock.js';
// CSS
import './CreateEnrich.css';

/*
    Placeholder template to be rendered on empty input fields.
*/
var placeholder = {
    name: "My Enrichment",
    description:
      "Tell us a little bit more about your Enrichment! Your description might include what type of activities are present, what topics will be covered, etc. Be creative!",
    host: "Me",
    roomName: "Room 000",
    weekdaySingle: "Single Day, " + getFormattedDate(),
    weekdayRecur: "No dates chosen"
}

/*
    Formats the current date to MM/DD/YYYY.
*/
function getFormattedDate() {
    let d = new Date();
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
}

/*
    Formats the current date to YYYY-MM-DD.
*/
function getHTMLFormattedDate(date) {
    let d = new Date(date);
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
}

export class CreateEnrich extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eName: "",
            eDesc: "",
            eWeekdays: "",
            eHost: "",
            eRoom: "",
            isSingleDay: true,
            singleDay: getHTMLFormattedDate(new Date())
        }
    }    handleNameChange = (e) => {
        this.setState({ eName: e.target.value });
    };
    handleDescChange = (e) => {
        this.setState({ eDesc: e.target.value });
    };
    handleRoomChange = (e) => {
        this.setState({ eRoom: e.target.value });
    }
    handleHostChange = (e) => {
        this.setState({ eHost: e.target.value });
    }
    handleDayChange = (e) => {
        this.setState({ eRoom: this.eRoom + e.target.value + " " })
    }
    handleDateChange = (e) => {
        this.setState({ singleDay: getHTMLFormattedDate(e.target.value) })
    }
    handleTimeChoiceChange = (e) => {
        this.setState({ isSingleDay: e.target.value === "single-day" })
    }
    render() {
        return (
            <div id="create-enrichment">
                <form id="create-enrichment-form">
                    <h2>Create Enrichment</h2>
                    <p>
                        Want to create your own Enrichment? Fill in the following fields,
                        and a request will be sent to await approval. Check your inbox
                        for additional information after submitting the form.
                    </p>
                    <input type="text" onChange={this.handleNameChange} placeholder="Enrichment Name" />
                    <textarea onChange={this.handleDescChange} placeholder="Enrichment Description" />
                    <input type="text" onChange={this.handleHostChange} placeholder="Host Name"/>
                    <input type="text" onChange={this.handleRoomChange} placeholder="Room Name" />          
                    <div id="create-enrichment-choose-time">
                        <p>
                            This Enrichment is...
                        </p>
                        <div>
                            <input onChange={this.handleTimeChoiceChange} checked={this.state.isSingleDay} type="radio" name="time-choice" id="single-day" value="single-day"/>
                            <label for="single-day">One Day</label>
                        </div>
                        <div>
                            <input onChange={this.handleTimeChoiceChange} checked={!this.state.isSingleDay} type="radio" name="time-choice" id="recurring" value="recurring"/>
                            <label for="recurring">Recurring</label>
                        </div>
                    </div>
                    <div id="create-enrichment-time">
                        {(this.state.isSingleDay) ? 
                            <div id="single-day-container">
                            <p>
                                Active on the following day:
                            </p>
                            <input onChange={this.handleDateChange} type="date" value={getHTMLFormattedDate(new Date())}></input>
                            </div>
                        :
                            <div id="weekdays-container">
                                <p>
                                    Operates on the following weekdays:
                                </p>
                                <div>
                                    <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="monday" value="Mon" />
                                    <label htmlFor="monday">Monday</label>
                                </div>
                                <div>
                                    <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="tuesday" value="Tue" />
                                    <label htmlFor="tuesday">Tuesday</label>
                                </div>
                                <div>
                                    <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="wednesday" value="Wed" />
                                    <label htmlFor="wednesday">Wednesday</label>
                                </div>
                                <div>
                                    <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="thursday" value="Thu" />
                                    <label htmlFor="thursday">Thursday</label>
                                </div>
                                <div>
                                    <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="friday" value="Fri" />
                                    <label htmlFor="friday">Friday</label>
                                </div>
                            </div>
                        }
                    </div>
                    <button>Submit Enrichment</button>
                </form>
                <div id="create-enrichment-preview">
                    <EnrichBlock
                        name={(this.state.eName === "") ? placeholder.name : this.state.eName}
                        description={(this.state.eDesc === "") ? placeholder.description : this.state.eDesc}
                        weekdays={(this.state.eWeekdays === "") ? ((this.state.isSingleDay) ? placeholder.weekdaySingle : placeholder.weekdayRecur) : this.state.eWeekdays}
                        host={(this.state.eHost === "") ? placeholder.host : this.state.eHost}
                        roomName={(this.state.eRoom === "") ? placeholder.roomName : this.state.eRoom}
                    />
                </div>
            </div>
        )
    }
}

export default CreateEnrich