// CSS
import './Homepage.css';
// REACT
import React, { Component } from 'react'
// COMPONENTS
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import BigContentBlock from "../components/BigContentBlock.js";
import ContentBlock from "../components/ContentBlock.js";
import Announcement from "../components/Announcement.js";
import LoginModal from "../components/authentication/LoginModal.js";
// IMAGES
import CalendarImg from "../img/calendar.png";
import AvatarImg from "../img/avatar.jfif";
import MagnifyingImg from "../img/magnifying.jfif";

export class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
        <div>
            <Header />
              <div className="content">
              <Announcement name="Announcement:" desc="This webpage is under development. Please refrain from registering Enrichments until further notice." />
                { (this.state.loggedIn) ? 
                <div>
                  <div className="block-container">
                    <BigContentBlock name="My Schedule" linkTo="/schedule" subname="View and change Enrichments!" desc="Welcome to Selenium! Click to view and change your scheduled Enrichments for the next few days." image={CalendarImg} />
                    <div id="mobile-flex-override" className="flex-column">
                      <div className="mobile spacer-md" />
                      <ContentBlock name="My Info" linkTo="/student-info" subname="Shows your information." desc="Locate your ID, change your nickname, or find other stored personal information." image={AvatarImg} />
                      <div className="spacer-md" />
                      <ContentBlock name="Teacher Locator" linkTo="/teacher-locator" subname="Find a teacher during Enrichment." desc="Find what room a teacher will be in on a specific Enrichment day." image={MagnifyingImg} />
                    </div>
                  </div> 
                </div>
                : <LoginModal /> }
              </div>
            <Footer />
        </div>
    )
  }
}

export default Homepage