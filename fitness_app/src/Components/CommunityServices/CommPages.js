import React from 'react'
import './Commpages.css';
import { useParams } from 'react-router-dom';
import { useCategory } from './CategoryContext';

const CommPages = () => {
    const { categoryName } = useParams();
    // const CategoryProvider = ({ children }) => {
        const categories = {
            "Championship": {
              name: "Championship",
              image: "championship.jpg",
              description: "Description for Championship category",
            },
            "Mindfulness": {
              name: "Mindfulness",
              image: "mindfulness.jpg",
              description: "Description for Mindfulness category",
            },
            "Yoga": {
              name: "Yoga",
              image: "yoga.jpg",
              description: "Description for Yoga category",
            },
            "Engage and educate": {
              name: "Engage and educate",
              image: "engage.jpg",
              description: "Description for Engage and Educate category",
            },
          };
    // const { categories } = useCategory();

    // Check if categories is undefined or empty
    if (!categories || categories.length === 0) {
        return <div>Loading...</div>; // You can display a loading indicator or handle the loading state appropriately
    }

    // Find the category object based on the categoryName
    // const category = categories.find((c) => c.name === categoryName);

    // const cate = categories.find((c)=> )
    // let desc,imge;

    // categories.map((cate) => {
    //     if (cate === categoryName) {
    //          desc = cate.desc
    //          imge = cate.image
    //     }
    //     else {
    //         return <div>category not found</div>
    //     }
    // })
    // if (!category) {
    //     // Handle case when category is not found
    //     return <div>Category not found</div>;
    // }

    // if(!category){
    //     return <div>category not found</div>
    // }

    const category = categories[categoryName]
    console.log(category)
    return (
        <div className='pages'>
            {/* <h1>
                CommPages {categories.name}
            </h1> */}
            {/* <img src={category.image} alt={category.name} />
          <p>{category.description}</p> */}
            <h1>{categoryName}</h1>
            {/* <img src={category.image} alt={category.name} /> */}
            <p>{category.description}</p>
        </div>

    )
}


export default CommPages