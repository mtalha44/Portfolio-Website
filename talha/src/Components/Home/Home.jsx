import { useEffect } from "react"
import { scroller } from "react-scroll";
import { useState } from "react"
import { Social } from "./Social"
import { Data } from "./Data"
import "./Home.css"
export const Home = () => {
    const [ scrollhide , setScrollHide ] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const handleScroll = () => {
        setScrollHide(!scrollhide);
        setTimeout(() => {
            scroller.scrollTo( "about", {
                smooth: true,
                duration: 500,
                offset: -150, // Adjust offset as needed
            }); 
        }, 500); // Delay in milliseconds
    };
    const checkScrollPosition = () => {
        if (window.scrollY === 0) {
            setScrollHide(false); // Reset hiding state when back at the top
            setIsVisible(true); // Make button visible
        } else {
            setIsVisible(false); // Hide button when scrolling down
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener("scroll", checkScrollPosition);
        return () => {
            // Clean up the event listener
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

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
        
        <div className="scroll-bth-handle flex-row " onClick={handleScroll}>
            <i className="bx bx-mouse"></i>
            {
            isVisible && (
                <>
              <p className={`${scrollhide ? "hide-scroll" : "scroll-text"}`}>Scroll Down</p>
              <i className={`${scrollhide ? "hide-scroll bx-transition" : "bx bx-down-arrow-alt scroll-arrow"}`}></i>
               </>
           )
           }
        </div>
    
        </div>
        </>
    )
}