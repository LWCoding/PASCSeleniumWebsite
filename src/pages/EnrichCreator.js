// REACT
import React, { Component } from 'react'
// COMPONENTS
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import CreateEnrich from "../components/CreateEnrich.js";

export class Homepage extends Component {
  render() {
    return (
        <div>
            <Header />
            <CreateEnrich />
            <Footer />
        </div>
    )
  }
}

export default Homepage