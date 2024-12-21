import { useState } from "react"
import "./Services.css"
/*************  ✨ Codeium Command ⭐  *************/
/******  88e7342f-7423-498b-941d-a7dbd1352010  *******/
const CardDetail = [

  {
    heading : "Product Designer" ,
    icon : <i className="bx bx-badge-check"></i>  ,
    list : [
      "Designing websites that adapt seamlessly to all devices.",
      "CreaOnedayting high-conversion landing pages for better engagement.",
      "Ensuring your website functions correctly on all popular browsers and devices.",
      "Ensuring smooth performance across all browsers.",
      "Implementing strategies to boost search engine visibility.",
      "Adding animations and dynamic features for engagement."
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

export const ServicesToggleCard = ({handleToggleCard , idxVal}) => {
  
  const [ closeToggleCard , setCloseToggleCard ] = useState(false);
  const handleToggleCardClose  = () => {
    handleToggleCard(!closeToggleCard);
    console.log(idxVal)
  }

    return (
      <>
        <div style={{display:"flex", alignItems:"flex-end" , width:"100%" , justifyContent: "flex-end"}}>

        <i className='bx bx-x-circle close-toggle-card' onClick={handleToggleCardClose}></i>
        </div>
      {
        
        CardDetail[idxVal].list.map((list , idxe ) =>(
          <div key={idxe} className={  closeToggleCard ? "gayab" : "toggle-card-detail " }>
               { idxe == 0 && <div className="card-detail-heading-container"> 
                  <div   className="card-detail-heading">
                    <h1> {CardDetail[idxVal].heading} </h1> 
                  </div> 
                </div> 
                }
          </div>

      ))
      }
              <div className="card-detail-list-container">
                  <CardList idxVal = {idxVal}/>
              </div>
               
        </>
  )
        
}

const CardList = ({idxVal}) => {

  return (
    CardDetail[idxVal].list.map((list , idxe ) =>(  
      <li className="card-detail-list" key={idxe}>
          <span className="card-detail-list-icon">
           
          {CardDetail[idxVal].icon}
          {list}
         </span>     
     </li>
    )) 
  )
}