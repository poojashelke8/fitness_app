import React from "react"
import './Home.css';
import { Link } from "react-router-dom";
import Classes from "./Classes";
import Navbar from "./Navbar";
// import Home from './Components/Home/Home';
// import Amenities from './Components/Amenities/Amenities';
import About from '../aboutUs/About';
import Community from '../CommunityServices/Community';
import Blogs from '../Blogs/Blogs';
import Contact_enquiry from '../Contact/Contact_enquiry';

function Home() {
    return (
        <>
            <div className="home">
            
            {/* <Navbar/> */}
            {/* < div className="navbar">
                <h1>Suprimo</h1>
                <div className="navContent">
                    <a href="#">Home</a>
                    <a href="#">Classes</a>
                    <a href="#">Team</a>
                    <a href="#">Blog</a>
                    <a href="#">About Us</a>
                    <button id="memberbtn">Membership Enquiry</button>
                </div>
            </div> */}
            <div className="mainContent">
                <h2>Train Hard</h2>
                <h2>Train Smart</h2>
                <h2>Train with Suprimo</h2>
                <button id='contentBtn'>Join now</button>
            </div>
           
        </div>
         <About />
         <Community />
         <Blogs />
         <Contact_enquiry />
        
        </>

    )
}

export default Home;