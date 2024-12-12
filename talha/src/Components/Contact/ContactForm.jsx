import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"

export const ContactForm = () =>{
       
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(e);
      emailjs
        .sendForm(
          'service_amcc7ri', // Replace with your EmailJS service ID
          'template_drqgsbu', // Replace with your EmailJS template ID
          form.current,
          '1C3Q2S1-4kBhWvj7z' // Replace with your EmailJS user ID (or public key)
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.error(error.text);
            alert('Failed to send message.');
          }
        );
    };
  
    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div>
            <label htmlFor="name" className="mylabel"  id="contact-user-name" >Name</label>
            <input type="text" name='name' className="contact-input"/>
        </div>
        <div>
            <label htmlFor="email" className="mylabel">Email</label>
            <input type="email" name="email" id="" className="contact-input"/>
        </div>
        <div>
            <label htmlFor="project" className="mylabel">Project</label><br />
            <textarea name="message" id="contact-project" cols="27" rows="5"></textarea>
        </div>
        <div>
            <button type="submit" className="contact-submit-btn flex-row">Submit <i class='bx bx-send'></i> </button>
        </div>
    </form>

    )
}