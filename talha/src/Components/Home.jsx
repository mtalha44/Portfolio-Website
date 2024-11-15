import { Social } from "./Social"
import { Data } from "./Data"
import "./Home.css"
export const Home = () => {
    
    return(
        <div className="main">
            <div className="home-social">
                 <Social/>
            </div>
            <div className="home-data">
                 <Data/>
            </div>
            <div className="home-profile-img">

            </div>
        </div>
      
    )
}