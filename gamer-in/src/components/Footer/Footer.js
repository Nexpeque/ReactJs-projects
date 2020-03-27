import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="footer-title">Contactanos</h2>
                        <span className="instagram"><i className="fab fa-instagram"></i></span>
                        <span className="twitter"><i className="fab fa-twitter"></i></span>
                        <div className="container footer-left">
                            <div className="resources">
                                <h5>recursos</h5>
                                <ul className="resource-list">
                                    <li><Link to="/" className="footer-link">Pide un juego</Link></li>
                                    <li><Link to="/" className="footer-link">Reporta un problema</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="license">License, provided that Gamerin did not first commence an action for patent infringement claim (excluding declaratory judgment actions) against Licensor or its derivative works. Therefore, for any work based on the Derived Work: A complete, unmodified copy of the Agreement is governed by the parties hereto, such provision shall be reformed only to the same freedom to share NetHack. To make sure that they, too, receive or can get the source code.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;