import React from "react";
import './Community.css';
// import CommCard from "./CommCard";
import commContent from "../CommunityServices/commContent.json"
import { Link,Route,Routes } from "react-router-dom";
import CommPages from "./CommPages";

function Community() {
    const test1 = ["Championship", "Mindfulness", "Yoga", "Engage and educate"]
    return (
        <div className="community">
            <div className="left">
                <h1>Body and Soul fitness</h1>
            </div>
            <div className="right">
                {
                    test1.map((test) => {
                        return (
                            <div className="rightContent">
                                <Link to={`community/${test}`}>{test}</Link>

                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default Community;