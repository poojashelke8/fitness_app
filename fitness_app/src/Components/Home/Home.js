import React from "react"
import './Home.css';

function Home(){
    return(
        <div className="home">
            < div className="navbar">
                <h1>Suprimo</h1>
                    <div className="navContent">
                        <a>Home</a>
                        <a>Classes</a>
                        <a>Team</a>
                        <a>Blog</a>
                        <a>About Us</a>
                        <button id="memberbtn">Membership Enquiry</button>
                    </div>
            </div>
        </div>
        
    )
}

export default Home;