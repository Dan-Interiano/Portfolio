import React from 'react'
import "./contact.css"
import Phone from "../../img/telephonepng.png"
import Email from "../../img/email.png"
import Github from "../../img/GitHub-Mark.png"
import { useRef, useState, useContext } from 'react'
import  emailjs  from '@emailjs/browser'
import { ThemeContext } from '../../context'

export default function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    function handleSubmit(e){
        e.preventDefault()
        emailjs.sendForm('service_rhhqzmf', 'template_dxhui1d', formRef.current, '5J6A5cJaOhsVlW7ih')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='c'>
        <div className='c-bg'>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Let's discuss your project!</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Phone} alt="phone.png" className='c-icon'/>
                            201-962-6346
                        </div>
                        <div className='c-info-item'>
                            <img src={Email} alt="phone.png" className='c-icon'/>
                            daninteriano@yahoo.com
                        </div>
                        <div className='c-info-item'>
                            <img src={Github} alt="phone.png" className='c-icon'/>
                            github.com/Dan-Interiano

                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        What's your story? Always open to starting a new project for those looking
                        for a dynamic and responsive website with beautiful UI/UX design as a top priority!
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder='Name' name="user_name" />
                            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder='Subject' name="user_subject" />
                            <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder='Email' name="user_email" />
                            <textarea style={{backgroundColor: darkMode && "#333" }} rows="5" placeholder='Message' name="message"/>
                            <button type="submit" className='submit-btn'>Submit</button>
                            {done && "Thank you..."}
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}
