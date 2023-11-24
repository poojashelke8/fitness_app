import React from 'react'
import './Contact_enquiry.css';

const Footer = () => {
  return (
    <>
        <div className="footer">
                <div className="footer_1">
                    <h2 id="heading_f">Suprimo Gym</h2>
                    <p id="contact">Sweat, lift, and conquer your fitness goals with us.
                         Your journey to a stronger, healthier you starts here. <br/><br/>
                         Join our gym now!</p>
                </div>
                <div className="footer_1">
                    <h2>Get Assistance</h2>
                    <p id="contact">
                        Phone: 1234567890<br/>
                        Email: suprimo@Gym.co.in
                    </p>
                </div>
                <div className="footer_1">
                    <h2>Locate Us</h2>
                    <p id="contact">FAQ's</p>
                    <a href="#" >Centers</a>
                </div>
            </div>
            {/* <br/> */}

            <div className="copy_rights">
            © Copyright Suprimo . All Rights Reserved
            </div>
    </>
  )
}

export default Footer