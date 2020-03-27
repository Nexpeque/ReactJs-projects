import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Layout(props) {
    let links = [
        {
            url: "/",
            name: "Home"
        },
        {
            url: "/profile",
            name: "Profile"
        },
        {
            url: "/games",
            name: "Games"
        }
    ]
    return (
        <React.Fragment>
            <Navbar links={links} />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}

export default Layout;