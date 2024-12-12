import "./Contact.css"
import { ContactForm } from "./ContactForm"

const socialDetails = [
    {
        icon : "bx bxl-whatsapp",
        name : "Whatsapp",
        contact : "03055997241" ,
        link : "https://wa.me/923055997241"
    },
    {
        icon : "bx bx-mail-send",
        name : "Email",
        contact : "mt4458649@gmail.com" ,
        link : "https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkWCjwJZkWXPlBkPTGLfJcFlhWzWgSsKHwXLQcBZsrCblJPgQLhBBrjPqPsRpLLfPGCpg"
    },
    {
        icon : "bx bx-chat",
        name : "Messenger",
        contact : "03055997241" ,
        link : "https://m.me/talha.1"
    }
]

export const ContactInfo = () => {

    return (
        <div className="contact-info-container">

            <div className="contact-info-social flex-col">
                    <div>
                    
                    <h3>Talk to me</h3>
                    </div>
                <div className="social-details">
                    <SocialDetails/>
                </div>
            </div>

           <div className="contact-info-form flex-col">
                <h3>Write me your Project</h3>
                <ContactForm/>
           </div>

        </div>
)
}

const SocialDetails = () => {
    const handleLink = (link) =>{
        window.open(link);
    }
    return (
        <>
          {
                    socialDetails.map( ( social , index ) => (
                        <div key={index} className="social-contact-card">
                            <div className="flex-col">
                                <i className={ ` ${social.icon} contact-icon`}></i>    
                            </div>
                            <div className="contact-details">
                                <h4 className="contact-name"> {social.name} </h4>
                                <p className="contact-number">{social.contact}</p>
                            </div>
                            <div className="write-btn flex-row" onClick={() => handleLink(social.link)}>
                                <p>Write me</p> 
                                <i className='bx bx-right-arrow-alt'></i>                            
                            </div>
                        </div>
                    ))
          }
        </>
    )
}