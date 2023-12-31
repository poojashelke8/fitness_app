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
import Footer from "../Contact/Footer";

function Home() {
    return (
        <>
            <div className="home">
            <div className="mainContent">
                <h2>Train Hard</h2>
                <h2>Train Smart</h2>
                <h2>Train with Suprimo</h2>
                <button className='btn'>Join now</button>
            </div>
           
        </div>
         <About />
         <Community />
         <Blogs />
         <Contact_enquiry />
         {/* <Footer/> */}
        
        </>

    )
}

export default Home;