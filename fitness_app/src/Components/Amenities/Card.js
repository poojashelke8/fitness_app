import React from "react";
import './Card.css';

function Card(props) {
    return (
    <div className="card">
            <div className="cardContent">
                <h2 id="cardTitle">{props.title}</h2><br/>
                <h3 id="cardDesc">{props.desc}</h3>
            </div>
        </div>
    )
}

export default Card;