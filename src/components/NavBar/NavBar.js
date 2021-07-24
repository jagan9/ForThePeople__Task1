import React from "react";

import "../../App.css"

//importing search icon from  react icons
import { FaSearch } from "react-icons/fa";

//import nabbar items from navitem component
import NavItem from "./NavItem";


const NavBar = () => (

    <div className="nav-menu " style={{
        height: "100%",
    }}>
        <ul >
            {/*using props to send information to navitem component */}

            <NavItem name="Home" dir="/" />
            <NavItem name="Blog" dir="/blog" />
            <NavItem name="About" dir="/about" />
            <NavItem name="People" dir="/people" />
            <NavItem name="Operations" dir="/operations" />
            <NavItem name="Report" dir="/report" />
            <div className="spacer"></div>
            <form action="/search" className="search-widget nav-search-box">
                <input
                    type="text"
                    maxLength="100"
                    size="20"
                    placeholder="Search"
                    className="search-bar nav-search-bar" />
                <button className="form-submit nav-search-button" type="submit">
                    <FaSearch className="icon" />
                </button>
            </form>

        </ul>

    </div>

);

export default NavBar;