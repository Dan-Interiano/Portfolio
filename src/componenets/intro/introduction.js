import "./intro.css"
import Me from "../../img/selfimage.JPG"

function Introduction(){
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Daniel Interiano </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Office Manager</div>
                            <div className="i-title-item">Customer Service Rep</div>
                            <div className="i-title-item">Bartender</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <p className="idesc">
                        I design and develop services for customers of all sizes, specializing in creating
                        stylish, modern websites, web services in online stores.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="self image" className="i-img" />
            </div>
            
        </div>
    )
}

export default Introduction;