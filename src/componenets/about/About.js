import "./about.css"
import Computers from "../../img/computers.jpg"

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
                    Here is the a-sub div that i will be putting something in soon.
                </p>
                <p className="a-desc">
                    This is the a-desc tag that is going to be filled with a large
                    paragraph about me! I can't wat! This is the a-desc tag that is going to be filled with a large
                    paragraph about me! I can't wat!This is the a-desc tag that is going to be filled with a large
                    paragraph about me! I can't wat!
                </p>
                 <div className="a-award">
                     <p>Here is another DIV for an award!</p>
                     <img src="" alt="" className="a-award-img" />
                 </div>
            </div>
        </div>
    )
}

export default About; 