import { useState } from "react"
import "./Services.css"
/*************  ✨ Codeium Command ⭐  *************/
/******  88e7342f-7423-498b-941d-a7dbd1352010  *******/
export const ServicesToggleCard = ({handleToggleCard , idxVal}) => {
  
  const [ closeToggleCard , setCloseToggleCard ] = useState(false);
  const handleToggleCardClose  = () => {
    handleToggleCard(!closeToggleCard);
    console.log(idxVal)
  }

    const CardDetail = [

          {
            heading : "Product Designer" ,
            icon : <i className="bx bx-badge-check"></i>  ,
            list : [
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday"
            ]
          }
          ,
          {
            heading : "UI/UX Designer" ,
            icon : <i className="bx bx-badge-check"></i>  ,
            list : [
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday"
            ]
          }
          ,
          {
            heading : "Visual Designer" ,
            icon : <i className="bx bx-badge-check"></i>  ,
            list : [
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday",
              "I want to become a Frontend developer Oneday"
            ]
          }
          
    ]
 
    return (
      
      CardDetail[idxVal].list.map((list , idxe ) =>(
          <div key={idxe} className={  closeToggleCard ? "gayab" : "toggle-card-detail " }>
               { idxe == 0 && <div className="card-detail-heading-container"> 
                <i className='bx bx-x-circle close-toggle-card' onClick={handleToggleCardClose}></i>
                  <div   className="card-detail-heading">
                    <h1> {CardDetail[idxVal].heading} </h1> 
                  </div> 
                </div> 
                }

              <div className="card-detail-list-container">

                <li className="card-detail-list">
                 <span className="card-detail-list-icon">
                  
                {CardDetail[idxVal].icon}
                 {list}
                </span>
                 
                </li>

              </div>
               
          </div>
        ))
        
    )
}