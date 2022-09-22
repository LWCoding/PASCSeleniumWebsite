// REACT
import React, { Component } from 'react'
// COMPONENTS
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export class MyInfo extends Component {
  render() {
    return (
        <div>
            <Header />
            <h1>My Info</h1>
            <Footer />
        </div>
    )
  }
}

export default MyInfo