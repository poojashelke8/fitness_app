import React from "react";
import './Community.css';
// import CommCard from "./CommCard";
// import commContent from "../CommunityServices/commContent.json"
import { Link} from "react-router-dom";
// import CommPages from "./CommPages";

function Community() {
    const categories = ["Championship", "Mindfulness", "Yoga", "Engage and educate"]
    return (
        <div className="community">
            <div className="left">
                <h1>Body and Soul fitness</h1>
            </div>
            <div className="right">
                {
                    categories.map((test,index=0) => {
                        return (
                            <div className="rightContent" key={index}>
                                <Link to={`community/${index}`
                                }>{test}
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