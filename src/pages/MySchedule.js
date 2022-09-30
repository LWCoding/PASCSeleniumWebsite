// REACT
import React, { Component } from 'react'
// COMPONENTS
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Schedule from "../components/Schedule.js";

export class MySchedule extends Component {
  render() {
    return (
        <div>
            <Header />
            <div className="content">
              <Schedule />
            </div>
            <Footer />
        </div>
    )
  }
}

export default MySchedule