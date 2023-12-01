import React from "react";
import './Classes.css';

function Classes() {
    const classes = ["HIIT", "Mobility", "Strength"]
    return (
        // <div className="classes">
        //     {
        //     classes.map((item, index) =>{
        //         return(
        //             <div>
        //                 <h2>{index + 1}. {item}</h2>
        //                 </div>
        //         )
        //     }
        // }
        <div className="classes">
             <div className="classes_1">
                <h2>Classes Data</h2>
                <button>Join</button>
            </div>
            <div className="classes_1">
                <h2>Classes Data</h2>
                <button>Join</button>
            </div>
            <div className="classes_1">
                <h2>Classes Data</h2>
                <button>Join</button>

            </div> 

</div>
    )
}

export default Classes;