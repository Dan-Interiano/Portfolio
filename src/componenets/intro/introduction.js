import "./intro.css";
import Me from "../../img/backup-home-pic.png";
import React, { useContext } from 'react';
import { ThemeContext } from '../../context'

function Introduction() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Daniel Interiano </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front End Developer</div>
                            <div className="i-title-item">Office Manager</div>
                            <div className="i-title-item">Customer Service Rep</div>
                            <div className="i-title-item">Back End Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        "A passionate Web Developer with experience in building Web and Mobile applications
                        with JavaScript and React for front end wweb design. I'm experienced in using Object Oriented languages such as
                        Ruby on Rails to communicate with backend databases using SQL, with Sinatra and Active Record frameworks. Ability to use
                        Boostrap and Material frameworks for front end web design."
                    </p>
                    <div className="home-buttons">
                        <button className="resume-btn" style={{ backgroundColor: darkMode && "#d2a05b" }}>
                            <a href="https://drive.google.com/file/d/12OXjBjTOi-FUZLoVfwjo_aaG03fuVkfs/view?usp=sharing" target="_blank" className="a-resume">See My Resume</a>
                        </button>
                        {/* <button className="contact-btn" style={{ backgroundColor: darkMode && "#d2a05b" }}>
                            <a href="#contact">Contact Me</a>
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg" style={{ backgroundColor: darkMode && "#d2a05b" }}></div>
                <img src={Me} alt="self image" className="i-img" />
            </div>

        </div>
    )
}

export default Introduction;