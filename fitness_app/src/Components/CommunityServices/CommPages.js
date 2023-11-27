import React from 'react'
import './Commpages.css';
import { useParams } from 'react-router-dom';
// import { useCategory } from './CategoryContext';

const CommPages = () => {
    const { testId } = useParams();
    const data = {
        0: {
            name: "Championship",
            desc: "Description for Championship category",
        },
        1: {
            name: "Mindfulness",
            desc: "Description for Mindfulness category",
        },
        2: {
            name: "Yoga",
            desc: "Description for Yoga category",
        },
        3: {
            name: "Engage and educate",
            desc: "Description for Engage and educate category",
        },
    };

    if(!testId in data){
        return <div>Data not found</div>
    }

    const item = data[testId]
    console.log(item)
    return (
        <div className='pages'>
            <h1>
                CommPages {item.name}
            </h1>
            <h3>{item.desc}</h3>
        </div>

    )
}


export default CommPages