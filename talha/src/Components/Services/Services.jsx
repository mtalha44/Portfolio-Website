import "./Services.css"
import { ServicesInfo } from "./ServicesInfo"
import { ServicesToggleCard } from "./ServicesToggleCard"
import { useState } from "react"


export const Services = () =>{
    
    return (
        <div className="services" id="services">
            <div className="service-title flex-col">
                <h1>Services </h1> 
                <p className="service-subtitle">My Offered Services</p>
            </div>
            <div className="services-info">
                <ServicesInfo/>
            </div>
            
        </div>
    )
}