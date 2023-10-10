import React from "react";
import Card from "./Card";
import './Amenities.css';
import cardContent from "../Amenities/cardContent.json"

function Amenities() {
    return (
        <div className="amenities">
                {cardContent.map((item, index) => (
                    <Card title = {item.title} desc = {item.content}/>
                ))}
        </div>
    )
}

export default Amenities;