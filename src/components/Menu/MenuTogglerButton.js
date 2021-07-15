import React from "react";

//importing hamburger button from react icons
import {FaBars} from "react-icons/fa";

import "../../App.css";

const  TogglerButton = () => (
    <a ><FaBars className="ham-icon" /></a>
);
 
export default TogglerButton;