import React from 'react';
import '../css-styles/topbar.css' ;
import { Link } from 'react-router-dom';
import arrow from "../css-styles/images/arrow.png";
import rotated from '../css-styles/images/rotated.png';
function About() {

    // ** Add Border to selected one
    function addBorder(event){
        let allLinks = document.querySelectorAll(".Imagebar ul li");
        for(let i=0;i<allLinks.length;i++){
            allLinks[i].style.border="none";
        }
        event.target.style.borderBottom ="3.5px solid #045184";
    }
    // **** hiddencolor****
    function hidebarandchangetext(event){
        // To show present link         
         let allNodes=document.querySelectorAll(".dropdown__menu li");
        for(let i=0;i<allNodes.length;i++){
            allNodes[i].style.color ="#10578B";
        }
        
        event.target.style.color = "black";
        let image = document.getElementById('image');
        image.src=`${arrow}`;
        let p = document.querySelector('.text');
        let menu = document.querySelector('.dropdown__menu');
        p.innerHTML = event.target.innerText
        menu.style.display = "none";
    }
    // Hidebar
    function hideBar(e){
        let bar=document.querySelector('.dropdown__menu');
        let image = document.getElementById('image');
        if(bar.style.display==="none"){
            bar.style.display="block"
            image.src=`${rotated}`
        }
        else{
            bar.style.display="none"
            image.src=`${arrow}`
        }
    }
    /** Function to Changebackground */
    function changeBackground(event){
        let imageTag=document.querySelector('img');
        let spanTag=document.querySelector('span');
        switch(event.target.innerText){
            case "Mission":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if(window.innerWidth>=480){
                    addBorder(event);
                }
                spanTag.innerText=event.target.innerText;
                imageTag.src ="https://static.wixstatic.com/media/nsplsh_396378342d516f77674c63~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_396378342d516f77674c63~mv2.webp"
                break
            case "Who we are":
                if (window.innerWidth <= 480) {
                   hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                spanTag.innerText = event.target.innerText;
                imageTag.src ="https://static.wixstatic.com/media/nsplsh_fc8662d44f00446cbf9dbdefaace46e2~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_fc8662d44f00446cbf9dbdefaace46e2~mv2.webp"
                break
            case "How we do":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                spanTag.innerText = event.target.innerText;
                imageTag.src ="https://static.wixstatic.com/media/nsplsh_a16cbc9d8b944a2cb14aedf58a0afa1d~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_a16cbc9d8b944a2cb14aedf58a0afa1d~mv2.webp"
                break
            case "Governance & Leadership":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                // addBorder(event);
                spanTag.innerText = event.target.innerText;
                imageTag.src ="https://static.wixstatic.com/media/nsplsh_c9b625629d2743c987629d9db3939846~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_c9b625629d2743c987629d9db3939846~mv2.webp"
                break
            case "What we do":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                // addBorder(event);
                spanTag.innerText = event.target.innerText;
                imageTag.src ="https://static.wixstatic.com/media/nsplsh_705957754f4d687463366b~mv2_d_3008_2000_s_2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_705957754f4d687463366b~mv2_d_3008_2000_s_2.webp"
                break
            case "Financials and Reports":
                if (window.innerWidth <= 480) {
                    hidebarandchangetext(event);
                }
                if (window.innerWidth >= 480) {
                    addBorder(event);
                }
                // addBorder(event);
                spanTag.innerText = event.target.innerText;
                imageTag.src ="https://static.wixstatic.com/media/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/84770f_5251001816154d3d9e793f346f9eca55~mv2_d_5472_3648_s_4_2.webp"
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
                imageTag.src ="https://static.wixstatic.com/media/nsplsh_2d0effc05f29423e8295ff8261af8c33~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_2d0effc05f29423e8295ff8261af8c33~mv2.webp"
                break
            default:
                break;
        }
    }
    return (
        <>
        <div className="Imagebar">
            <img src="https://static.wixstatic.com/media/nsplsh_396378342d516f77674c63~mv2.jpg/v1/fill/w_1349,h_281,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_396378342d516f77674c63~mv2.webp" alt="background" />
            <ul className="Topbar__links">
                <Link to="/mission" style={{ textDecoration: 'none', color: 'white' }}>
                    <li onClick={changeBackground}>Mission</li>
                </Link>
                <Link to="/whoweare" style={{ textDecoration: 'none', color: 'white' }}>
                    <li onClick={changeBackground} >Who we are</li>
                </Link>
                <Link to="/whatwedo" style={{ textDecoration: 'none', color: 'white' }}>
                    <li onClick={changeBackground} >What we do</li>
                </Link>
                <Link to="/howwedo" style={{ textDecoration: 'none', color: 'white' }}>
                    <li onClick={changeBackground} >How we do</li>
                </Link>
                <Link to="/governance" style={{ textDecoration: 'none', color: 'white' }}>
                    <li onClick={changeBackground} >Governance & Leadership</li>
                </Link>
                <Link to="/finance" style={{ textDecoration: 'none', color: 'white' }}>
                    <li onClick={changeBackground} >Financials and Reports</li>
                </Link>

                <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                    <li onClick={changeBackground} >Contact us</li>
                </Link>

            </ul>
            <span>Mission</span>
        </div>

            {/* Dropdown Bar */} 
            <p onClick={() => hideBar()} className="selected"><span className="text">Mission</span><span><img src={arrow} alt={arrow} id="image" /></span></p>
                    <ul className="dropdown__menu" >
                        <Link to="/mission" style={{ textDecoration: 'none' }}>
                            <li onClick={changeBackground}>Mission</li>
                        </Link>
                        <Link to="/whoweare" style={{ textDecoration: 'none' }}>
                            <li onClick={changeBackground} >Who we are</li>
                        </Link>
                        <Link to="/whatwedo" style={{ textDecoration: 'none' }}>
                            <li onClick={changeBackground} >What we do</li>
                        </Link>
                        <Link to="/howwedo" style={{ textDecoration: 'none' }}>
                            <li onClick={changeBackground} >How we do</li>
                        </Link>
                        <Link to="/governance" style={{ textDecoration: 'none' }}>
                            <li onClick={changeBackground} >Governance & Leadership</li>
                        </Link>
                        <Link to="/finance" style={{ textDecoration: 'none' }}>
                            <li onClick={changeBackground} >Financials and Reports</li>
                        </Link>

                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <li onClick={changeBackground} >Contact us</li>
                        </Link>

                    </ul>
          
    </>    
    )
}

export default About
