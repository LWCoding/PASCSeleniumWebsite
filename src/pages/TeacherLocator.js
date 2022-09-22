// REACT
import React, { Component } from 'react'
// COMPONENTS
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export class TeacherLocator extends Component {
  render() {
    return (
        <div>
            <Header />
            <h1>Teacher Locator</h1>
            <Footer />
        </div>
    )
  }
}

export default TeacherLocator