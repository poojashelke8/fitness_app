import React from "react";
import './Community.css';
import Card from "./Card";

function Community(){
    return (
        <div className="community">
             <div className="left">
            <h1>Body and Soul Fitness</h1>
            </div>
            
            <div className="right">
                <Card/>
            </div> 
        </div>
    )
}

export default Community;