import React from "react";
import './Community.css';
import CommCard from "./CommCard";
import cardContent from "../CommunityServices/commContent.json"

function Community(){
    return (
        <div className="community">
            <div className="left">
                <h1>Body and Soul fitness</h1>
            </div>
            <div className="right">
            {cardContent.map((item, index) => (
                    <CommCard title = {item.title} image ={item.image_url}/>
                ))}
                {/* <CommCard/> */}
            </div>

            
        </div>
    )
}

export default Community;