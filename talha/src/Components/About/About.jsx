import "./About.css"
import { Info } from "./Info"
export const About = () =>{
const Achievments = [
    {
        icon : <i className='bx bx-briefcase-alt'></i>
        ,
        award : "Experience"
        ,
        detail : "1 Year"
    },
    {
        icon : <i className='bx bx-award' ></i>
        ,
        award : "Completed"
        ,
        detail : "40+ Projects"
    },
    {
        icon : <i className='bx bx-headphone'></i>
        ,
        award : "Support"
        ,
        detail : "Online 24/7"
    }
]
    return (
        <>
            <section className="about" id="about">
                <div className="about-title-container">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-subtitle">My Introduction</p>
                </div>
                <div className="about-container">
                     <div className="about-img">

                     </div>
                     <div className="about-details">
                          <div>
                            <Info achievements={Achievments} />
                          </div>
                          <div className="about-description-data">
                            <p className="description">Hi, I’m Talha, a dedicated Frontend Developer who creates responsive, user-friendly, and secure websites. I’m passionate about turning ideas into seamless digital experiences. Let’s bring your vision to life!</p>
                          </div>
                            <a href="./public/CV/my_CV.pdf" download="my_CV.pdf">
                                <button className="download-btn flex-row">Download CV <i className="bx bxs-file-pdf"></i></button>
                            </a>
                     </div>
                </div>
            </section>
        </>
    )
}