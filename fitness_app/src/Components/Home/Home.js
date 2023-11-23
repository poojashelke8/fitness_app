import React from "react"
import './Home.css';
import { Link } from "react-router-dom";
import Classes from "./Classes";

function Home(){
    return(
        <div className="home">
            < div className="navbar">
                <h1>Suprimo</h1>
                    <div className="navContent">
                        <Link to="/">Home</Link>
                        {/* <a href="#">Home</a> */}
                        {/* <a href="#">Classes</a> */}
                        <Link to={"/Classes"}>Classes</Link>
                        <a href="#">Team</a>
                        <a href="#">Blog</a>
                        <a href="#">About Us</a>
                        <button id="memberbtn">Membership Enquiry</button>
                    </div>
            </div>
            <div className="mainContent">
                <h2>Train Hard</h2> 
                <h2>Train Smart</h2>
                <h2>Train with Suprimo</h2>
                <button id='contentBtn'>Join now</button>
            </div>
        </div>
        
    )
}

export default Home;