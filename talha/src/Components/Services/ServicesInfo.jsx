import { useState } from "react";
import "./Services.css"
import { ServicesToggleCard } from "./ServicesToggleCard";
export const ServicesInfo = () => {
    const [ toggleCardClose , setToggleCardClose ] = useState(true);
    const [ cardValue , setCardValue ] = useState(0);
    const closeToggleCard = (nmbr) => {
        setToggleCardClose(!toggleCardClose);
        console.log(nmbr);
        setCardValue(nmbr); 
    }
    const HandleToggleCard = (data) => {
        setToggleCardClose(data);
    }
    
    const Services = [
       {
          icon : [
              <i key="1" className='bx bx-book-content service-icon'></i>,
              <i key="2" className='bx bx-code-alt service-icon'></i >,
              <i key="3" className='bx bx-palette service-icon'></i>
            ]
            ,
            name : [
                "Product Designer",
                "UI/UX Designer",
                "Visual Designer"
            ]
            ,
            option : (
                <>
                   View more <i className='bx bx-right-arrow-alt services-option-icon'></i> 
                </>
            )
       }
    ]
    return (
        <>
        
        {
            Services.map( ( Services , index ) => (
                <div key={index} className="services-info-card"> 
                     {Services.icon.map( (icon , idx ) =>(
                        <div key={idx} className="services-info-card-details" >
                            {icon}
                            <h2 className="services-name">{Services.name[idx]}</h2>
                            {/* <div className="services-further-details flex-row" onClick={closeToggleCard}>{Services.option}</div> */}
                            <div className="services-further-details flex-row" key={idx} onClick={() => closeToggleCard(idx)}>{Services.option}</div>
            
                        <div className={ toggleCardClose ? "closeToggleCard" : "services-toggle-card" }>
                                
                                <div className="card-detail">
            
                                <ServicesToggleCard handleToggleCard={HandleToggleCard} idxVal = {cardValue}/>
                                </div>
                        </div>
                
                    
                        </div>
                     ))}                     
                </div> 
            ))
        }
        </>
    )
}