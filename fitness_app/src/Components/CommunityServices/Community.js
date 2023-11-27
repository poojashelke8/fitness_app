import React from "react";
import './Community.css';
// import CommCard from "./CommCard";
import commContent from "../CommunityServices/commContent.json"
import { Link, Route, Routes } from "react-router-dom";
import CommPages from "./CommPages";
import { useCategory } from "./CategoryContext";

function Community() {
    const test1 = ["Championship", "Mindfulness", "Yoga", "Engage and educate"]
    const {categories} = useCategory()
    return (
        <div className="community">
            <div className="left">
                <h1>Body and Soul fitness</h1>
            </div>
            <div className="right">
                {
                    categories.map((test) => {
                        console.log(categories)
                        return (
                            <div className="rightContent" key={test.name}>
                                <Link to={`community/${test.name}`
                                }>{test.name}
                                    {/* <h3>{test.description}</h3>
                                    <img src={test.image} alt={test.name} /> */}
                                </Link>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Community;