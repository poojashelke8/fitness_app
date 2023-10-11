import React from "react";
import './About.css';
import myImage from "../Images/about.jpg"

function About() {
    return (
        <div className="aboutUs">
            <div className="aboutText">
                <h1>500+</h1><br/>
                <h2>Satisfied Customers</h2><br/>
                <p>"Our growing community of satisfied customers 
                    is a testament to the trust and confidence placed in us. 
                    With each passing day, our numbers continue to soar, 
                    fueled by the unwavering support and positive feedback we receive. 
                    We are deeply grateful for the trust you've placed in our services, 
                    and we remain committed to delivering excellence that surpasses your expectations.</p>
            </div>
            <div className="aboutText2">
                <h2>Get in shape and training at the gym or home.</h2>
            </div>

            <img id="aboutimg" src={myImage} alt="My Image" />
        </div>
    )
}

export default About;