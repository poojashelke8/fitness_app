import React from "react";
import "./commCard.css";

function CommCard(props) {
    return (
        <div className="cardData">
            <div className="cardContent">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default CommCard;