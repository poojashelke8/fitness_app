import React from "react";
import './Classes.css';

function Classes() {
    const people = [
        {
           name: "HIIT Training",
           desc: "High Intensity Interval Training with variations in workouts focuses on different aspects of fitness i.e. strength, stamina, endurance, and agility. Each class is designed based on the format that is scientifically created by a panel of experts, with the potential to torch maximum calories in a minimum amount of time. HIIT is all about doing short periods of all-out work followed by short periods of active rest. This makes the body work harder than it does during steady-state cardio. Out trainers customize each workout routine making it fun and motivating and correct the Forms and techniques in six different classes designed specifically through the week.",
           images:"https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        },
        {
           name: "Functional Training",
           desc: "Functional training simply means training your body to perform everyday movements such as lifting bending, climbing stairs. Functional training helps in improving the functional movements. The time spent training with functional equipment in open spaces improves different fitness aspects by developing your agility, flexibility and dynamic strength. This training can be undertaken by anyone from a beginner to an athlete can start training at MultiFit.",
           images:"https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Personal Training",
            desc: "Personal training can be done by any individual who requires personal attention to move closer to their goals. A customized workout and 1:1 training with the trainer to help reach your individual goals that may include anything from weight loss, gaining strength, injury rehab, and conditioning for a sport. A personal trainer gives one a disciplined workout and helps one start out with the correct forms and techniques",
            images:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        },
        {
            name: "Strength and Conditioning",
            desc: "Strength and Conditioning is the physical and physiological development of athletes elite sports performance. At Multifit we work with a number of athletes across various sports to help improve their performance within chosen sport. S&C focuses on more than just lifting weights; we look at speed, agility, co-ordination, plyometrics, strength, power, core stability & conditioning of the body to ensure that they are at the top of their game all year round.",
            images:"https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

       ];
    return (
            <div>
                {
                    people.map((test)=>{
                        return(
                        <div className="classes_1">
                        <h2 className="class_head">{test.name}</h2>
                        <div className="classes_2">
                        <p className="class_desc">{test.desc}</p>
                        {test.images && <img className="class_img" src={process.env.PUBLIC_URL + test.images} alt={test.name} />}
                        </div>
                        </div>)
                    })
                }
            </div>


        
    )
}

export default Classes;