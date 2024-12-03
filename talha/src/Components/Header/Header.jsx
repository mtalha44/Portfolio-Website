import "./Header.css"
import { useState } from "react";
import { Link } from 'react-scroll';
export const Header = () => {

    const [ hideLi, setHide ] = useState(false);

    return (
        <header className="container">
            <div className={ `logo-section-lg flex-row ${ hideLi ? "gayab" : "logo-section"}`}>
            <img src="/logo/Tlogo.png" alt="T" className="logo" />            
            <h3 className="logo-text">ALHA</h3>
            </div>
            <nav className={`navbar-lg ${ !hideLi ? "close-navbar" : "navbar"} `}>
                <ul className={`nav-list-lg ${ !hideLi ? "gayab" : "nav-list" }`}>
                    <li>    <Link to="home"      smooth={true} duration={500} offset={-130} className="nav-link">     <i className='bx nav-icons  bx-home'></i> Home</Link>          </li>
                    <li>    <Link to="about"     smooth={true} duration={500} offset={-120} className="nav-link">    <i className='bx nav-icons bx-user'></i> About</Link>          </li>
                    <li>    <Link to="skills"    smooth={true} duration={500} offset={-85} className="nav-link">   <i className='bx nav-icons bx-award' ></i> Skills</Link>       </li>
                    <li>    <Link to="services"  smooth={true} duration={500} offset={-85} className="nav-link">  <i className='bx nav-icons bx-briefcase' ></i> Services</Link> </li>
                    <li>    <Link to="portfolio" smooth={true} duration={500} offset={-85} className="nav-link"><i className='bx nav-icons bx-image' ></i> Portfolio</Link>    </li>
                    <li>    <Link to="contact"   smooth={true} duration={500} offset={-85} className="nav-link">  <i className='bx nav-icons bx-message-rounded-dots'></i> Contact</Link> </li>
                    

                </ul>
                <i className={`bx bx-x  ${!hideLi ? "gayab" : "nav-close-icon"}`} onClick={() => setHide(!hideLi)}></i>
            </nav>
                <i className={ ` bx bx-menu  ${ hideLi ? "gayab" : "nav-menu-icon"}` } onClick={() => setHide(!hideLi)}></i>
        </header>
    )
}