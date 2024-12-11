import "./Contact.css"
import { ContactInfo } from "./ContactInfo"

export const Contact = () => {
    return (
        <div className="contact" id="contact" >
            <div className="contact-title flex-col" >
                <h1 className="contact-title-text">Contact</h1> 
                <p className="contact-subtitle">Get In Touch</p>
            </div>
            <div className="contact-info" >
                <ContactInfo/>
            </div>
        </div>
    )
}