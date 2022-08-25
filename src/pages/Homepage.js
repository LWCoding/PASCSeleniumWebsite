// REACT
import React, { Component } from 'react'
// COMPONENTS
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import EnrichList from '../components/EnrichList.js';

export class Homepage extends Component {
  render() {
    return (
        <div>
            <Header />
            <EnrichList />
            <Footer />
        </div>
    )
  }
}

export default Homepage