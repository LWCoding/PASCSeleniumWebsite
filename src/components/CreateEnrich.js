// React
import React, { Component } from 'react'
// Components
import EnrichBlock from './EnrichBlock.js';
// CSS
import './CreateEnrich.css';

var placeholder = {
    name: "Video Game Design and Development",
    description:
      "Interested in story writing, graphic design, music composition, programming, or maybe even something else? Game development may be the interest for you!\n\nThis club will be mainly interested in developing a conceptual understanding of the structures that make up video games and some syntax in the C# programming language. We'll be working towards gaining familiarity with the Unity Engine (which has created some VERY popular games, such as Hearthstone, Hollow Knight, Pokémon Go, Among Us), but downloading it isn't a prerequisite!\n\nThis club is also a community to develop or refine your creative skills, with the hopes of you creating projects of your own or as a team! We hope to see you there.",
    host: "Lucas Wang",
    roomName: "Room 112",
    weekdays: "Mon Tue Wed Thu Fri",
}

export class CreateEnrich extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eName: "",
            eDesc: "",
            eWeekdays: "",
            eHost: "",
            eRoom: ""
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
    render() {
        return (
            <div id="create-enrichment">
                <form id="create-enrichment-form">
                    <input type="text" onChange={this.handleNameChange} placeholder="Enrichment Name" />
                    <textarea onChange={this.handleDescChange} placeholder="Enrichment Description" />
                    <input type="text" onChange={this.handleHostChange} placeholder="Host Name"/>
                    <input type="text" onChange={this.handleRoomChange} placeholder="Room Name" />
                    <div id="checkbox-container">
                        <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="monday" value="Mon" />
                        <label htmlFor="monday">Monday</label>
                        <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="tuesday" value="Tue" />
                        <label htmlFor="tuesday">Tuesday</label>
                        <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="wednesday" value="Wed" />
                        <label htmlFor="wednesday">Wednesday</label>
                        <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="thursday" value="Thu" />
                        <label htmlFor="thursday">Thursday</label>
                        <input onChange={this.handleDayChange} type="checkbox" name="weekday" id="friday" value="Fri" />
                        <label htmlFor="friday">Friday</label>
                    </div>
                    </form>
                <div id="create-enrichment-preview">
                    <EnrichBlock
                        name={(this.state.eName === "") ? placeholder.name : this.state.eName}
                        description={(this.state.eDesc === "") ? placeholder.description : this.state.eDesc}
                        weekdays={(this.state.eWeekdays === "") ? placeholder.weekdays : this.state.eWeekdays}
                        host={(this.state.eHost === "") ? placeholder.host : this.state.eHost}
                        roomName={(this.state.eRoom === "") ? placeholder.roomName : this.state.eRoom}
                    />
                </div>
            </div>
        )
    }
}

export default CreateEnrich