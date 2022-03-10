import "./about.css"
import Computers from "../../img/computers.jpg"
import CSS from '../../img/csscertificate.png'
import HTML from '../../img/htmlcertificate.png'



function About(){
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Computers} alt="computer" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Motivated Web Developer looking for opportunities to expand my skillset.
                </p>
                <p className="a-desc">
                    Currently enrolled in the Flatiron School in New York City, set to graduated in Spring 2022.
                    I've used my front end developing skills to create apps with creative UI design, with responsive frameworks.
                    My backend skills have allowed me to create my own RESTful APIs and managed large databases.
                </p>
                 <div className="a-award">
                     <p>See some of the certifications I've gotten!</p>
                     <img src={CSS} alt="css certificate" className="a-award-img" />
                     <img src={HTML} alt="html certificate" className="a-award-img" />
                 </div>
            </div>
        </div>
    )
}

export default About; 