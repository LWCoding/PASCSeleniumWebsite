// Images
import wpcpLogo from "../img/wpcp_logo.png";
// CSS
import "./Header.css";
// React
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="header">
            <div id="banner">
                <div id="header-design" />
                <div id="header-design-corner" />
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img id="logo" src={wpcpLogo} alt="School emblem" />
                </Link>
                <div id="school-text">
                    <h2 id="h2-not-mobile">Walter Payton College Prep</h2>
                    <h1 id="h1-not-mobile">Selenium Enrichment Website</h1>
                    <h2 className="mobile">WPCP</h2>
                    <h1 className="mobile">Selenium</h1>
                </div>
            </div>
            <div id="banner-divider" />
        </div>
    );
}

export default Header;
