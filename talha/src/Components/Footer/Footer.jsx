import "./Footer.css"
import { Link } from 'react-scroll';

export const Footer = () => {
    return(
        <>
        <div className="footer flex-col">

            <div className="flex-ow">
                 <img src="/logo/Tlogo.png" alt="T" className="footer-logo" />            
                 <h3 className="footer-logo-text">ALHA</h3>
            </div>
            <div className="footer-links flex-row">
                    <li>    <Link to="about"     smooth={true} duration={500} offset={-120} className="footer-nav-link">   About</Link>          </li>
                    <li>    <Link to="portfolio"      smooth={true} duration={500} offset={-130} className="footer-nav-link">     Portfolio</Link>          </li>
                    <li>    <Link to="skills"    smooth={true} duration={500} offset={-85} className="footer-nav-link">    Skills</Link>       </li>

            </div>
            <div className="footer-social-links flex-row">
                    <a href="https://www.facebook.com/talha.alha.1/" target="_blank"><i className='bx bxl-facebook-circle'></i></a>
                    <a href="https://www.linkedin.com/in/talha-alha/" target="_blank"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/TalhaAlha" target="_blank"><i className='bx bxl-github' ></i></a>
            </div>
            <div className="footer-copyright-section">
                <p>@Copyright. All rights are reserved.</p>
            </div>
        </div>
        </>
    )
}