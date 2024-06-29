import React from 'react'
import {useRef} from'react'
import Navbar from '../navbar';
import "./rate.css"
// import emailjs from 'emailjs-com'

const Rate = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wwagfua', 'template_6agczak', form.current, 'vzaJpu1v7Pc3iHbxo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div>
        <Navbar/>
        <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Full email' required />
          <textarea name="message" cols="30" rows="10" placeholder='Your Message' requiredn></textarea>
          <button type="submit" className="action-btn">Send Message</button>
        </form>
        </div>
    </div>
  )
}

export default Rate