import React from "react";
import './Contact_enquiry.css';

function Contact_enquiry() {
    return (
        <>
            <div className="enquiry">
                Contact and enquiry
                <div className="enquiry_form">
                    WE WANT TO HEAR FROM YOU
                    Please fill out our form and we will get in touch shortly
                    <form>
                        {/* <input placeholder="Name" />
                        <input placeholder="Email" /> */}
                        <input type="text" name="name" class="form-control"
                            id="name" placeholder="Full Name" data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"></input>

                        <input type="email" class="form-control" name="email"
                            id="email" placeholder="Your Email" data-rule="email"
                            data-msg="Please enter a valid email"></input>

                        <input type="tel" name="phone" class="form-control"
                            id="phone" placeholder="Mobile No" data-rule="minlen:10"
                            data-msg="Please enter at least 10 chars"></input>

                        <input type="text" class="form-control" placeholder="City" name="city"
                            id="city" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>

                        <textarea class="form-control" name="message" rows="3"
                            data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>

                        <button>Send Message</button>
                    </form>

                </div>
                {/* <form>
                    <label>Enter your name:
                        <input
                            type="text"
                            name="username"
                        // value={inputs.username || ""} 
                        // onChange={handleChange}
                        />
                    </label>
                    <label>Enter your age:
                        <input
                            type="number"
                            name="age"
                        //   value={inputs.age || ""} 
                        //   onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />
                </form> */}
            </div>
            <div className="footer">

                Footer
            </div>
        </>
    )
}

export default Contact_enquiry;