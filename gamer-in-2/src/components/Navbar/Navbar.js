import React, { Component } from 'react'
import classes from "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/GamerIn.png"

export default class Navbar extends Component {
    render() {
        return (
            <header className={classes.header}>
                <img className={classes.logo} src={logo} alt="logo" />
                <nav>
                    <ul className={classes["nav-links"]}>
                        <li><Link className={classes.link} to="/" >Home</Link></li>
                        <li><Link className={classes.link} to="/games" >Games</Link></li>
                        <li><Link className={classes.link} to="/profile" >Profile</Link></li>
                    </ul>
                </nav>
                <Link className={classes.cta} to="/login" ><button>Login</button></Link>
            </header>
        )
    }
}
