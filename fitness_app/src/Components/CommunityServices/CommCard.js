import React from "react";
import "./commCard.css";

function CommCard(props) {
    return (
        <div className="cardData">
                <h2>Champion</h2>
                <img src={props.image} alt={props.title} />
                <h2>nature</h2>
                <img src={props.image} alt={props.title} />
           
                <h2>educate</h2>
                <img src={props.image} alt={props.title} />
       
        </div>
    )
}

export default CommCard;