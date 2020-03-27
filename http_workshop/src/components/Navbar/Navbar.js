import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.css"
class Navbar extends Component {

    render() {
        let navbarValues = this.props.links.map((link, index) => {
            return (
                <li className="nav-item" key={index}>
                    <Link to={link.url} className="nav-link">{link.name}</Link>
                </li>
            );
        });
        return (
            <header className={classes.header}>

            </header>
        );
    }
}
export default Navbar;