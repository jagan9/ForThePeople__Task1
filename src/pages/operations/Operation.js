import React from 'react';
import '../css-styles/topbar.css' ;
import { Link } from 'react-router-dom';
import arrow from "../css-styles/images/arrow.png";
import rotated from '../css-styles/images/rotated.png';
function Operation() {

    // ** Add Border to selected one
    function addBorder(event) {
        let allLinks = document.querySelectorAll(".Imagebar ul li");
        for (let i = 0; i < allLinks.length; i++) {
            allLinks[i].style.border = "none";
        }
        event.target.style.borderBottom = "3.5px solid #045184";
    }
    // **** hiddencolor****
    function hidebarandchangetext(event) {
        // To show present link         
        let allNodes = document.querySelectorAll(".dropdown__menu li");
        for (let i = 0; i < allNodes.length; i++) {
            allNodes[i].style.color = "#10578B";
        }

        event.target.style.color = "black";
        let image = document.getElementById('image');
        image.src = `${arrow}`;
        let p = document.querySelector('.text');
        let menu = document.querySelector('.dropdown__menu');
        p.innerHTML = event.target.innerText
        menu.style.display = "none";
    }
    // Hidebar
    function hideBar(e) {
        let bar = document.querySelector('.dropdown__menu');
        let image = document.getElementById('image');
        if (bar.style.display === "none") {
            bar.style.display = "block"
            image.src = `${rotated}`
        }
        else {
            bar.style.display = "none"
            image.src = `${arrow}`
        }
    }
    /** Function to Changebackground */
    function changeBackground(event) {
        let imageTag = document.querySelector('img');
        let spanTag = document.querySelector('span');
        switch (event.target.innerText) {
            case "Events":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                spanTag.innerText = event.target.innerText;
                imageTag.src = "https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.webp";
                break
            case "Gallery":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                spanTag.innerText = event.target.innerText;
                imageTag.src = "https://static.wixstatic.com/media/nsplsh_536d345446453778744451~mv2_d_6000_4500_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_536d345446453778744451~mv2_d_6000_4500_s_4_2.webp";
                break
            case "Projects":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                spanTag.innerText = event.target.innerText;
                imageTag.src ="https://static.wixstatic.com/media/nsplsh_6232315479333343715673~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_6232315479333343715673~mv2_d_6000_4000_s_4_2.webp";
                break
            case "Contact us":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                // addBorder(event);
                spanTag.innerText = event.target.innerText;
                imageTag.src = "https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.webp";
                break
            default:
                break;
        }
    }
    return (
        <>
            <div className="Imagebar">
                <img src="https://static.wixstatic.com/media/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.jpg/v1/fill/w_1349,h_283,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_63583276456c513561486b~mv2_d_5860_3912_s_4_2.webp" alt="background" />
                <ul className="Topbar__links">
                    <Link to="/events" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground}>Events</li>
                    </Link>
                    <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground} >Projects</li>
                    </Link>
                    <Link to="/gallery" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground} >Gallery</li>
                    </Link>
                    <Link to="/contacts" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground} >Contact us</li>
                    </Link>
                </ul>
                <span>Events</span>
            </div>

            {/* Dropdown Bar */}
            <p onClick={() => hideBar()} className="selected"><span className="text">Events</span><span><img src={arrow} alt={arrow} id="image" /></span></p>
            <ul className="dropdown__menu" >
                <Link to="/events" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground} >Events</li>
                </Link>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground}>Projects</li>
                </Link>
                <Link to="/gallery" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground} >Gallery</li>
                </Link>
                <Link to="/contacts" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground} >Contact us</li>
                </Link>
            </ul>

        </>
    )
}

export default Operation
