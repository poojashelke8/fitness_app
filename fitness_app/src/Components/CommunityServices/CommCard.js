import React from "react";
import "./commCard.css";

function CommCard(props) {
    return (
        <div className="cardData">
            <div className="cardContent">
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} />
            </div>
        </div>
    )
}

export default CommCard;