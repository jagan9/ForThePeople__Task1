import React from "react";
import "../../App.css";
//importing search icon from react icons
import { FaSearch } from "react-icons/fa";

import MenuItem from "./MenuItem.js";

//using props to recieve information from other components
const SideMenuBar = (props) => (
    <nav className="side-menu">

        <div className="search-widget">
            <form action="/search">

                <input
                    type="text"
                    maxlength="50"
                    size="1"
                    placeholder="Search"
                    className="search-bar" />
                <button className="form-submit" type="submit" href="/search">
                    <FaSearch className="icon-small" />
                </button>
            </form>
        </div>

        <ul className="sidenav-items">
            <MenuItem name="Home" dir="/" />
            <MenuItem name="Blog" dir="/blog" />
            <MenuItem name="About" dir="/about" />
            <MenuItem name="People" dir="/people" />
            <MenuItem name="Operations" dir="/operations" />
            <MenuItem name="Report" dir="/report" />

        </ul>

    </nav>
);

export default SideMenuBar;