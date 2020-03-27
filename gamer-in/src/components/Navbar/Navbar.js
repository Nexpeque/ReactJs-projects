import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Navbar as Nv } from "react-bootstrap";
import "./Navbar.css"
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
            <header className="header">
                <Nv expand="sm" bg="dark" className="navbar">
                    <Nv.Brand>
                        <Link to="/" className="img-container">
                            <span className="text-white brandt">GamerIn</span>
                        </Link>
                    </Nv.Brand>
                    <Nv.Toggle aria-controls="basic-navbar-nav" />
                    <Nv.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav>
                            {navbarValues}
                        </Nav>
                    </Nv.Collapse>
                </Nv>
            </header>
        );
    }
}
export default Navbar;