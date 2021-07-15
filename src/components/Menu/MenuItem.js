import React from "react";

import "../../App.css";

//using props to receive information from other components
const MenuItem = (props) => (
    <li className="menu-item">
            <a href={props.dir}>{props.name}</a>
    </li>
);

export default MenuItem;