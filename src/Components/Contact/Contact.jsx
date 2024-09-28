import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { themeContext } from '../../Contex';
function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_onnvynq', 'template_fn6o9md', form.current, {
          publicKey: '2WLYq2EJ9UcttYi3P',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setDone(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>

            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message' />
                <input type="submit" value='Send' className='button'/>
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur" style={{background:"rgb(238 210 255)"}}>

                </div>
            </form>
        </div>
    </div>
  
  )
}

export default Contact