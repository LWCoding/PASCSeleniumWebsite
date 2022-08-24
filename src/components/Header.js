// Images
import wpcpLogo from '../img/wpcp_logo.png'
// CSS
import './Header.css'

function Header() {
    return (
        <div id="header">
            <div id="banner">
                <div id="header-design" />
                <div id="header-design-corner" />
                <img id="logo" src={wpcpLogo} alt="School emblem" />
                <div id="school-text">
                    <h2>Walter Payton College Prep</h2>
                    <h1>Selenium Enrichment Website</h1>
                </div>
            </div>
            <div id="banner-divider" />
        </div>
    );
}

export default Header;