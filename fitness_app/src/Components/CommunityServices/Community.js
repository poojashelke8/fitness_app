import React from "react";
import './Community.css';
// import CommCard from "./CommCard";
import cardContent from "../CommunityServices/commContent.json"

function Community() {
    return (
        <div className="community">
            <div className="left">
                <h1>Body and Soul fitness</h1>
            </div>
            <div className="right">
                <div className="rightContent">
                    <a href="#" >Championship</a>
                </div>
                <div className="rightContent">
                    <a href="#">Mindfulness</a>
                </div>
                <div className="rightContent">
                    <a href="#">Yoga</a>
                </div>
                <div className="rightContent">
                    <a href="#" >Engage and educate</a>
                </div>
            </div>
        </div>
    )
}

export default Community;