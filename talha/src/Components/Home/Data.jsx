import { useState } from "react"

export const Data = () => {
    const [ scroll , setScroll ] = useState(false);

    return (
        <div className="home-data flex-col">
            <div className="home-data-title flex-row">
             <h1 className="home-title">Muhammad Talha</h1>
             <img src="/Emoji/waving-hand.png" alt="" className="hand-img"/>
            </div>
            <div className="home-data-description flex-col">
                <h3 className="home-subtitle">Frontend Developer</h3>
                <p className="home-description">I am a frontend developer specializing in building responsive, secure, and user-friendly websites tailored to meet client's needs.</p>
            </div>
            {/* <button className="btn-hire">Hire me <i className='bx bxl-telegram'></i></button> */}
            <div className="wrap">
              <button className="hire-button">Hire Me</button>
            </div>
            {/* <div className={` scroll-bth-handle flex-row ${ scroll && "hide-scroll-text" }`} onClick={ () => setScroll(!scroll) }>
                <i className="bx bx-mouse"></i>
                <p className="scroll-text">Scroll Down</p>
                <i className="bx bx-down-arrow-alt scroll-arrow"></i>
            </div> */}
        </div>
    )
}