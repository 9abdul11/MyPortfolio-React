import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'
import {BiLogoWhatsapp} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useState } from 'react'


const Contact = () => {

  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_33pxefh', 'template_dyc5zps', form.current, 'RZ-3CP9TsZVH03km4')
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <FiMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>basit021193354@gmail.com</h5>
            <a href="mailto:basit02119354@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact-option">
            <GrLinkedinOption className='contact-icon'/>
            <h4>Linked In</h4>
            <h5>Abdul Basit</h5>
            <a href="https://www.linkedin.com/in/abdul-basit-a46925242 " target="_blank">Send a Message</a>
          </article>
          <article className="contact-option">
            <BiLogoWhatsapp className='contact-icon'/>
            <h4>Whatsapp</h4>
            <h5>+92 335-4541315</h5>
            <a href="https://api.whatsapp.com/send?phone+923354541315" target="_blank">Send a Message</a>
          </article>
        </div>

        
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Message" required></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
        {isMessageSent && <p className="success-message">Message sent successfully!</p>}
      </form>
      
      
      </div>
    </section>
  )
}

export default Contact