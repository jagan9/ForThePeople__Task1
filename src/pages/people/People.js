import React from 'react';
import '../css-styles/topbar.css' ;
import { Link } from 'react-router-dom';
import arrow from "../css-styles/images/arrow.png";
import rotated from '../css-styles/images/rotated.png';
function People() {

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
            case "Members":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                spanTag.innerText = event.target.innerText;
                imageTag.src = "https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.webp";
                break
            case "Careers":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                spanTag.innerText = event.target.innerText;
                imageTag.src = "https://static.wixstatic.com/media/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_1349,h_281,al_t,q_85,usm_0.66_1.00_0.01/nsplsh_774e7a375f354576555755~mv2_d_6016_4000_s_4_2.webp";
                break
            case "Communities":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                spanTag.innerText = event.target.innerText;
                imageTag.src = "https://static.wixstatic.com/media/55b9087be50e46b59051426e1cdd23cb.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/55b9087be50e46b59051426e1cdd23cb.webp";
                break
            case "Partners":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                // addBorder(event);
                spanTag.innerText = event.target.innerText;
                imageTag.src = "https://static.wixstatic.com/media/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_180cb9475d35470e81293861b8bb812d~mv2.webp";
                break
            case "Life at FTP":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                // addBorder(event);
                spanTag.innerText = event.target.innerText;
                imageTag.src = "https://static.wixstatic.com/media/8daf94f88f524d8cb168d8004c1fe282.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/8daf94f88f524d8cb168d8004c1fe282.webp";
                break
            default:
                break;
        }
    }
    return (
        <>
            <div className="Imagebar">
                <img src="https://static.wixstatic.com/media/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_1349,h_201,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_36553541456d5149616a67~mv2_d_4272_2848_s_4_2.webp" alt="background" />
                <ul className="Topbar__links">
                    <Link to="/member" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground}>Members</li>
                    </Link>
                    <Link to="/career" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground} >Careers</li>
                    </Link>
                    <Link to="/community" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground} >Communities</li>
                    </Link>
                    <Link to="/partner" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground} >Partners</li>
                    </Link>
                    <Link to="/lifeatftp" style={{ textDecoration: 'none', color: 'white' }}>
                        <li onClick={changeBackground} >Life at FTP</li>
                    </Link>
                   
                </ul>
                <span>Members</span>
            </div>

            {/* Dropdown Bar */}
            <p onClick={() => hideBar()} className="selected"><span className="text">Members</span><span><img src={arrow} alt={arrow} id="image" /></span></p>
            <ul className="dropdown__menu" >
                <Link to="/member" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground} >Members</li>
                </Link>
                <Link to="/career" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground}>Careers</li>
                </Link>
                <Link to="/community" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground} >Communities</li>
                </Link>
                <Link to="/partner" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground} >Partners</li>
                </Link>
                <Link to="/lifeatftp" style={{ textDecoration: 'none' }}>
                    <li onClick={changeBackground} >Life at FTP</li>
                </Link>
            </ul>

        </>
    )
}

export default People
