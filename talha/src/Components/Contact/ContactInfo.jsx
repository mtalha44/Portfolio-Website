import "./Contact.css"

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
        link : "https://mail.google.com/mt4458649@gmail.com"
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
            <form className="contact-form">
                <div>
                    <label htmlFor="name" className="mylabel"  id="contact-user-name" >Name</label>
                    <input type="text" className="contact-input"/>
                </div>
                <div>
                    <label htmlFor="email" className="mylabel">Email</label>
                    <input type="email" name="" id="" className="contact-input"/>
                </div>
                <div>
                    <label htmlFor="project" className="mylabel">Project</label><br />
                    <textarea name="" id="contact-project" cols="27" rows="5"></textarea>
                </div>
                <div>
                    <button type="submit" className="contact-submit-btn flex-row">Submit <i class='bx bx-send'></i> </button>
                </div>
            </form>
           </div>

        </div>
)
}

const SocialDetails = () => {
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
                            <div className="write-btn flex-row">
                                <p>Write me</p> 
                                <i className='bx bx-right-arrow-alt'></i>                            
                            </div>
                        </div>
                    ))
          }
        </>
    )
}