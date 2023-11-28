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
            images: "https://images.unsplash.com/photo-1520529301226-42abc4cd766b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        1: {
            name: "Mindfulness",
            desc: "Description for Mindfulness category",
            images: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        2: {
            name: "Yoga",
            desc: "Description for Yoga category",
            images: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        3: {
            name: "Engage and educate",
            desc: "Description for Engage and educate category",
            images: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    };

    if (!testId in data) {
        return <div>Data not found</div>
    }

    const item = data[testId]
    console.log(item)
    return (
        <div className='pages'>
            <h2>
                CommPages {item.name}
            </h2>
            <div className='pageContent'>
                <h3>{item.desc}</h3>
                {item.images && <img className= "pageImage"src={process.env.PUBLIC_URL + item.images} alt={item.name} />}
            </div>
        </div>

    )
}


export default CommPages