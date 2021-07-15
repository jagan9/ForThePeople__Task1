import React from "react";
import { Link } from 'react-router-dom';

//using props to recieve information from other components
const NavItem = (props) => (
    <div className="div_hover">
        <li>
            <Link to={props.dir}>
                <b >{props.name}</b>
            </Link>
        </li>
    </div>
);

export default NavItem;