import React from "react";
import "../styles/Footer.css"
function Footer(){
    return(
        <footer>
            <p className="footer-txt">Made with Webflow</p>
            <ul className="footer-links">
                <li><a href="#">dribble</a></li>
                <li><a href="#">linkedin</a></li>
                <li><a href="#">twitter</a></li>
                <li><a href="#">instagram</a></li>
            </ul>
        </footer>
    );
}

export default Footer;