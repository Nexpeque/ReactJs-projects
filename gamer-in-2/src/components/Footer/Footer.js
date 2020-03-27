import React from "react";
import classes from "./Footer.css";
import { Link } from "react-router-dom";
function Footer(props) {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div className="col-md-6">
                        <h2 className={classes["footer-title"]}>Contactanos</h2>
                        <span className={classes.instagram}><i className="fab fa-instagram"></i></span>
                        <span className={classes.twitter}><i className="fab fa-twitter"></i></span>
                        <div className={classes.container + " " + classes["footer-left"]}>
                            <h5 className={classes.title}>recursos</h5>
                            <div className={classes.resources}>
                                <ul className={classes["resource-list"]}>
                                    <li><Link to="/" className={classes["footer-link"]}>Pide un juego</Link></li>
                                    <li><Link to="/" className={classes["footer-link"]}>Reporta un problema</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className={classes.license}>License, provided that Gamerin did not first commence an action for patent infringement claim (excluding declaratory judgment actions) against Licensor or its derivative works. Therefore, for any work based on the Derived Work: A complete, unmodified copy of the Agreement is governed by the parties hereto, such provision shall be reformed only to the same freedom to share NetHack. To make sure that they, too, receive or can get the source code.</p>
                </div>
            </div>
        </footer >
    );
}
export default Footer;