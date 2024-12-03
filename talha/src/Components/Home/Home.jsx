import { Social } from "./Social"
import { Data } from "./Data"
import "./Home.css"
export const Home = () => {
    
    return(
        <>
        <div className="home-container flex-col" id="home">

        <div className="main">

            <div className="home-social flex-col">
                 <Social/>
            </div>
            <div className="home-main-data">
                 <Data/>
            </div>
            <div className="home-profile-img">

            </div>

        </div>
        <div className={` scroll-bth-handle flex-row ${ scroll && "hide-scroll-text" }`} onClick={ () => setScroll(!scroll) }>
            <i className="bx bx-mouse"></i>
            <p className="scroll-text">Scroll Down</p>
            <i className="bx bx-down-arrow-alt scroll-arrow"></i>
        </div>
    
        </div>
        </>
    )
}