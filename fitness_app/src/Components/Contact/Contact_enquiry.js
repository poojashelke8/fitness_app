import React from "react";
import './Contact_enquiry.css';

function Contact_enquiry() {
    return (
        <>
            <div className="enquiry">
                Contact and enquiry
                <div className="enquiry_form">
                    <h3>WE WANT TO HEAR FROM YOU</h3>
                    <h4>Please fill out our form and we will get in touch shortly</h4>
                    <form>
                        {/* <input placeholder="Name" />
                        <input placeholder="Email" /> */}
                        <div className="form_row1">
                            <input type="text" name="name" class="form-control"
                                id="name" placeholder="Full Name" data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"></input>

                            <input type="email" class="form-control" name="email"
                                id="email" placeholder="Your Email" data-rule="email"
                                data-msg="Please enter a valid email"></input>

                        </div>

                        <div className="form_row2">
                            <input type="tel" name="phone" class="form-control"
                                id="phone" placeholder="Mobile No" data-rule="minlen:10"
                                data-msg="Please enter at least 10 chars"></input>

                            <input type="text" class="form-control" placeholder="City" name="city"
                                id="city" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>

                        </div>
                        <div className="form_row3">
                            <textarea class="form-control" name="message" rows="3" id="message"
                                data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>

                        </div>
                        <button id="send_btn">Send Message</button>
                    </form>

                </div>
            </div>
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

export default Contact_enquiry;