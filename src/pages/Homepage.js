// CSS
import './Homepage.css';
// REACT
import React, { Component } from 'react'
// COMPONENTS
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import BigContentBlock from "../components/BigContentBlock.js";
import ContentBlock from "../components/ContentBlock.js";
// IMAGES
import CalendarImg from "../img/calendar.png";
import AvatarImg from "../img/avatar.jfif";
import MagnifyingImg from "../img/magnifying.jfif";

export class Homepage extends Component {
  render() {
    return (
        <div>
            <Header />
            <div id="block-container">
                <div className="flex-row">
                  <BigContentBlock name="My Schedule" linkTo="/schedule" subname="View and change Enrichments!" desc="Welcome to Selenium! Click to view and change your scheduled Enrichments for the next few days." image={CalendarImg} />
                </div>
                <div className="flex-column">
                  <ContentBlock name="My Info" linkTo="/student-info" subname="Shows your information." desc="Locate your ID, change your nickname, or find other stored personal information." image={AvatarImg} />
                  <div className="spacer-md" />
                  <ContentBlock name="Teacher Locator" linkTo="/teacher-locator" subname="Find a teacher during Enrichment." desc="Find what room a teacher will be in on a specific Enrichment day." image={MagnifyingImg} />
                </div>
            </div>
            <Footer />
        </div>
    )
  }
}

export default Homepage